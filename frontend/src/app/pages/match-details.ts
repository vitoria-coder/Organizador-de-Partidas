import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatchService } from '../core/services/match';
import { ConfirmationService } from '../core/services/confirmation';
import { authService } from '../core/services/auth';
@Component({
  selector: 'app-match-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './match-details.html',
  styleUrl: './match-details.scss'
})
export class MatchDetails implements OnInit{
  partida: any= null ;
  errorMessage: string ='';
  confirmacoes: any[] = [];
  usuarioLogadoId: number | null = null;
 

  constructor(
    private route:ActivatedRoute,
    private matchService: MatchService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private authService: authService,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const usuarioLogadoId = this.authService.getUserIdFromToken(); 
    
    if(id) {
      this.matchService.getById(+id).subscribe({
        next: (res) => (this.partida = res),
        error: (err) =>{
          console.error(err);
          this.errorMessage = 'Erro ao carregar detalhes da partida.';
        }
      });

      this.confirmationService.getConfirmations(+id).subscribe({
       next: (res) =>{
        this.confirmacoes = res,
        this.confirmacoes.forEach(conf =>{
          conf.ehDoUsuario = conf.user_id === usuarioLogadoId;
        });
       },
       error: (err) =>{
        console.error(err);
        this.errorMessage = 'Erro ao carregar informações.';
       }
      });
    }
  }

  voltar(){
    this.router.navigate(['/matches']);
  }

  removerConfirmacao(id: number){
    if(!confirm('Tem certeza que deseja remover esta confirmação?')) return;

    this.confirmationService.delete(id).subscribe({
      next: () =>{
        location.reload();
      },
      error:() =>{
        alert('Erro ao remover a confirmação.');
      }
    });
  }
}

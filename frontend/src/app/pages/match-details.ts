import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatchService } from '../core/services/match';
import { ConfirmationService } from '../core/services/confirmation';
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

  constructor(
    private route:ActivatedRoute,
    private matchService: MatchService,
    private router: Router,
    private confirmationService: ConfirmationService,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.matchService.getById(+id).subscribe({
        next: (res) => (this.partida = res),
        error: (err) =>{
          console.error(err);
          this.errorMessage = 'Erro ao carregar detalhes da partida.';
        }
      });

      this.confirmationService.getConfirmations(+id).subscribe({
        next: (res) => (this.confirmacoes = res),
        error: (err) =>{
          console.error(err);
          this.errorMessage = 'Erro ao carregar confirmações.' 
        },
      });
    }
  }

  voltar(){
    this.router.navigate(['/matches']);
  }
}

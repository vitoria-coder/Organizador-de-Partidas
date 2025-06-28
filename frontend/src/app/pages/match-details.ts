import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatchService } from '../core/services/match';
@Component({
  selector: 'app-match-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './match-details.html',
  styleUrl: './match-details.scss'
})
export class MatchDetails implements OnInit{
  partida: any= null ;
  errorMessage: string ='';

  constructor(
    private route:ActivatedRoute,
    private matchService: MatchService,
    private router: Router
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
    }
  }

  voltar(){
    this.router.navigate(['/matches']);
  }
}

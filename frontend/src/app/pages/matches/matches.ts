import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatchService } from '../../core/services/match';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-matches',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './matches.html',
  styleUrl: './matches.scss'
})
export class Matches implements OnInit{
  partidas: any[] = [];

  title: string='';
  date: string='';
  location: string='';
  errorMessage: string='';

  constructor(private matchService: MatchService){}

  ngOnInit() {
    this.loadMatches();
}

  loadMatches(){
    this.matchService.getAll().subscribe({
      next: (res) =>(this.partidas = res),
      error: (err) =>{
        this.errorMessage ='Erro ao carregar partidas';
      },
    });
  }

  onSubmit(){
    const matchData={
      title: this.title,
      date: this.date,
      location: this.location,
    };
    this.matchService.create(matchData).subscribe({
      next: () =>{
        this.loadMatches();
        this.title='';
        this.date='';
        this.location='';
        this.errorMessage='';
      },
      error: (err) =>{
        console.error(err);
        this.errorMessage ='Erro ao criar partida.';
      },
    });
  }


removerPartida(id:number){
  this.matchService.delete(id).subscribe({
    next:() =>{
      console.log(`Partida com ID ${id} removida com sucesso.`);
      this.loadMatches();
    },
    error: (err) =>{
      console.error(`Erro ao remover partida com ID ${id}:`, err);
    }
  });
}


}
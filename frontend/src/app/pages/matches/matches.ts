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
  todasPartidas: any[] = [];
  partidas: any[] = [];

//CamposPraCriaçãoDasNovasPartidas. 
  title: string='';
  date: string='';
  location: string='';
  errorMessage: string='';

//VariáveisDeFiltros.
  filtroLocal: string ='';
  filtroData: string ='';

  constructor(private matchService: MatchService){}

  ngOnInit() {
    this.loadMatches();
}

//FazABuscaPorTodasAsPartidas
  loadMatches(){
    this.matchService.getAll().subscribe({
      next: (res) =>(this.partidas = res),
      error: (err) =>{
        this.errorMessage ='Erro ao carregar partidas';
      },
    });
  }

//CriaçãoDePartidas&AtualizaçaõesDaListagem.
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

//AplicaçãoDeFiltrosPorData&Local.
  aplicarFiltros(){
    this.partidas = this.todasPartidas.filter(p =>{
      const matchLocal = this.filtroLocal ? p.location.toLowerCase().includes(this.filtroLocal.toLowerCase()) : true;
      const matchData = this.filtroData ? p.date === this.filtroData : true;

      return matchLocal && matchData;
    })
  }

removerPartida(id: number) {
  if(!confirm('Tem certeza que deseja remover esta partida?')) return;
  this.matchService.delete(id).subscribe({
    next: () =>{
      this.partidas = this.partidas.filter(p => p.id !== id); 
      console.log('Partida removida com sucesso.');
    },
  });
}

}
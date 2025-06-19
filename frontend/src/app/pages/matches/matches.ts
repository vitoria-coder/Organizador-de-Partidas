import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatchService } from '../../core/services/match';


@Component({
  selector: 'app-matches',
  imports: [CommonModule, RouterModule],
  templateUrl: './matches.html',
  styleUrl: './matches.scss'
})
export class Matches implements OnInit{
  partidas: any[] = [];

  constructor(private matchService: MatchService){}

  ngOnInit() {

    this.matchService.getAll().subscribe({
      next: (res) => this.partidas = res,
      error: (err) => console.error('Erro ao buscar partidas', err)
    });
    
  }
}

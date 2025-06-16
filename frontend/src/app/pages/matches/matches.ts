import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-matches',
  imports: [CommonModule, RouterModule],
  templateUrl: './matches.html',
  styleUrl: './matches.scss'
})
export class Matches {
  partidas = [{
   id: 1,
   local: '',
   data: '',
   horario: '',
   vagas: ''
  },
{
  id: 2,
  local: '',
  data: '',
  horario: '',
  vagas:''
}];

participar(partidaId: number){
  console.log('Confirmado na partida de ID: ${partidaId}');
}

}

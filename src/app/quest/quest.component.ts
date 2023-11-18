import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Quest} from '../models/quest.model';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent {
  @Input() quest!: Quest;
  @Output() questCompleted = new EventEmitter<number>();

  completeQuest(): void {
    this.questCompleted.emit(this.quest.id);
  }
}

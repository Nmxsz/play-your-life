import { Component } from '@angular/core';
import {Quest} from '../models/quest.model';
import {QuestService} from '../services/quest-service';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestComponent {
  newQuest: Quest = {
    id: 3,
    title: '',
    description: '',
    experienceReward: 0,
    completed: false,
    items: []
  };

  constructor(private questService: QuestService) { }

  addQuest(): void {
    if (this.newQuest.title && this.newQuest.description) {
      this.questService.addQuest(this.newQuest);
      this.newQuest = { id: 3, title: '', description: '', experienceReward: 0, completed: false, items: [] };
    }
  }
}

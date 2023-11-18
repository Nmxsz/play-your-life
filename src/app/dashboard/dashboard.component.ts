import { Component, OnInit } from '@angular/core';
import {Quest} from '../models/quest.model';
import {LevelService} from '../services/level-service';
import {QuestService} from '../services/quest-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quests: Quest[] = [];
  showAddQuestForm = false;

  constructor(
    private levelService: LevelService,
    private questService: QuestService
  ) { }

  ngOnInit(): void {
    this.quests = this.questService.getQuests();
  }

  onQuestCompleted(questId: number): void {
    this.questService.completeQuest(questId);
    const quest = this.quests.find(q => q.id === questId);
    if (quest) {
      this.levelService.addExperience(quest.experienceReward);
    }
  }

  get userLevel(): number {
    return this.levelService.getLevel();
  }

  get userExperience(): number {
    return this.levelService.getExperience();
  }

  get experienceForNextLevel(): number {
    return this.levelService.getExperienceForNextLevel();
  }

  toggleAddQuestForm(): void {
    this.showAddQuestForm = !this.showAddQuestForm;
  }
}

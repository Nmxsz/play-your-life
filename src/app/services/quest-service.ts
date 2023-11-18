import { Injectable } from '@angular/core';
import { Quest } from '../models/quest.model';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private quests: Quest[] = [
    // Beispielquests
    { id: 1, title: 'Die Wissenssammler-Reise', description: 'Mutiger Abenteurer, deine Aufgabe ist es, das Reich des Wissens zu erforschen! Jeden Tag musst du 30 Seiten aus den uralten Büchern des Wissens lesen. Die Texte variieren täglich, sodass du dich auf eine Reise durch unterschiedlichste Welten und Epochen begibst.\n' +
        'Dauer: 7 Tage, täglich wiederholbar\n' +
        'Tägliche Ziele: Montag: Lese 30 Seiten eines historischen Romans. Belohnung: 20 Erfahrungspunkte + 1 goldener Wissensmünze.\n' +
        'Dienstag: Lese 30 Seiten eines Wissenschaftsbuches. Belohnung: 25 Erfahrungspunkte + 2 Tränke der Klarheit.\n' +
        'Mittwoch: Lese 30 Seiten Poesie. Belohnung: 15 Erfahrungspunkte + 1 Amulett der Eloquenz.\n' +
        'Donnerstag: Lese 30 Seiten eines Fantasy-Romans. Belohnung: 30 Erfahrungspunkte + 1 Zauberstab der Fantasie.\n' +
        'Freitag: Lese 30 Seiten eines Krimis. Belohnung: 20 Erfahrungspunkte + 1 Detektivlupe.\n' +
        'Samstag: Lese 30 Seiten eines Sachbuchs. Belohnung: 25 Erfahrungspunkte + 1 Buch der Weisheit.\n' +
        'Sonntag: Lese 30 Seiten deiner Wahl. Belohnung: 15 Erfahrungspunkte + 1 Geheimnisvolle Schriftrolle.\n' +
        'Endbelohnung nach 7 Tagen: 150 Erfahrungspunkte + 1 Buch der Unendlichen Geschichten (spezieller Gegenstand, der dir erlaubt, an einem Tag deiner Wahl doppelt so viele Seiten zu lesen für doppelte Belohnungen).', experienceReward: 50, completed: false,
    items: [{name: '1x Buch der Unendlichen Geschichten ', description: 'Spezieller Gegenstand, der dir erlaubt, an einem Tag deiner Wahl doppelt so viele Seiten zu lesen für doppelte Belohnungen'}]}
    // Weitere Quests...
  ];

  getQuests(): Quest[] {
    return this.quests;
  }

  completeQuest(questId: number): void {
    const quest = this.quests.find(q => q.id === questId);
    if (quest && !quest.completed) {
      quest.completed = true;
      // Hier könnte der LevelService aufgerufen werden, um Erfahrungspunkte hinzuzufügen.
    }
  }

  getQuestById(questId: number): Quest {
    return <Quest>this.quests.find(q => q.id === questId);
  }

  addQuest(quest: Quest): void {
    // Füge Logik zum Hinzufügen der Quest hinzu
    this.quests.push(quest);
  }

}

export interface Data {
  chores: Chore[],
  people: { [name: string]: Person }
}

export interface Chore {
  id: string,
  description: string,
  frequency: string,
  history: Entry[],
}

export interface Entry {
  person: string,
  timestamp: string,
}

export interface Person {
  name: string,
  initials: string
}

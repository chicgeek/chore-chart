export interface Chore {
  id: string,
  description: string,
  frequency: string,
  history: {
    person: string,
    timestamp: string,
  }[],
}

interface Person {
  name: string,
  initials: string
}

export interface Data {
  chores: Chore[],
  people: { [name: string]: Person }
}
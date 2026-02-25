import { Metadata } from "next"

import { BoardContent } from "./board-content"

export const metadata: Metadata = {
  title: "Board",
}

export default async function BoardLoading() {
  return <div>Carregando...</div>
}

import { data } from "@/types/main";
import dataJSON from "../data.json";
import HomePage from "./HomePage"

export default async function page() {
  const info: data = dataJSON;

  return (
    <>
      <HomePage data={info} />
    </>
  )
}
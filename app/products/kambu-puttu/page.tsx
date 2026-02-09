import { ProductDetail } from "@/components/product-detail"

const nutrition = [
  { label: "Energy", value: "360 Kcal" },
  { label: "Protein", value: "7 gms" },
  { label: "Carbohydrates", value: "70 gms" },
  { label: "Fat", value: "4 gms" },
  { label: "Fiber", value: "4.6 gms" },
  { label: "Iron", value: "3 mg" },
  { label: "Calcium", value: "33 mg" },
]

const nutritionLabelsMalay = [
  { label: "Tenaga", value: "360 Kcal" },
  { label: "Protein", value: "7 gms" },
  { label: "Karbohidrat", value: "70 gms" },
  { label: "Lemak", value: "4 gms" },
  { label: "Serat", value: "4.6 gms" },
  { label: "Zat Besi", value: "3 mg" },
  { label: "Kalsium", value: "33 mg" },
]

const steps = [
  "For every 1 cup of Red Rice Powder, mix with lukewarm water and a pinch of salt.",
  "Sprinkle the water little by little and use your fingertips to crumble the flour until there are no lumps.",
  "Keep aside for 10 minutes to let the flour absorb the moisture.",
  "Layer the puttu maker with shaved coconut and the prepared flour alternately.",
  "Steam cook for 10 minutes until done.",
  "Serve hot — tastes best with country sugar (nattu sakkarai) and banana!",
]

const stepsMalay = [
  "Untuk setiap 1 cawan serbuk beras merah, campurkan dengan air suam dan sedikit garam.",
  "Percikkan air sedikit demi sedikit dan gunakan hujung jari untuk meramas tepung sehingga tiada ketulan.",
  "Ketepikan selama 10 minit supaya tepung menyerap kelembapan.",
  "Susun acuan puttu dengan kelapa parut dan tepung yang disediakan secara berselang-seli.",
  "Kukus selama 10 minit sehingga masak.",
  "Hidangkan panas — paling sedap dengan gula kampung (nattu sakkarai) dan pisang!",
]

const ingredients = "Red Rice."

const ingredientsMalay = "Beras Merah."

export default function RedRicePuttuPage() {
  return (
    <ProductDetail
      title="Kambu Puttu Redimix Powder"
      image="/kambu.jpeg"
      nutrition={nutrition}
      steps={steps}
      ingredients={ingredients}
      stepsMalay={stepsMalay}
      ingredientsMalay={ingredientsMalay}
      nutritionLabelsMalay={nutritionLabelsMalay}
    />
  )
}
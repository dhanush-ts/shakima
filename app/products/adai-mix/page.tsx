import { ProductDetail } from "@/components/product-detail"

const nutrition = [
  { label: "Energy", value: "340 Kcal" },
  { label: "Protein", value: "20 gms" },
  { label: "Carbohydrates", value: "67 gms" },
  { label: "Fat", value: "4 gms" },
  { label: "Fiber", value: "5.5 gms" },
]

const nutritionLabelsMalay = [
  { label: "Tenaga", value: "340 Kcal" },
  { label: "Protein", value: "20 gms" },
  { label: "Karbohidrat", value: "67 gms" },
  { label: "Lemak", value: "4 gms" },
  { label: "Serat", value: "5.5 gms" },
]

const steps = [
  "Soak 100gms of mix in 100ml of water and grind to a coarse batter.",
  "Rest the batter for 10 to 15 minutes.",
  "Add chopped onion and curry leaves to the batter.",
  "Pour onto a hot tawa and cook both sides till crispy. Serve hot!",
]

const stepsMalay = [
  "Rendam 100gm campuran dalam 100ml air dan kisar sehingga menjadi adunan kasar.",
  "Rehatkan adunan selama 10 hingga 15 minit.",
  "Tambah bawang yang dicincang dan daun kari ke dalam adunan.",
  "Tuang ke atas tawa panas dan masak kedua-dua belah sehingga rangup. Hidangkan panas!",
]

const ingredients =
  "Kuthirai Vali, Red Cholam, Kambu, Ragi, Toor Dal, Idli Rice, Cumin, Asafoetida."

const ingredientsMalay =
  "Kuthirai Vali, Cholam Merah, Kambu, Ragi, Toor Dal, Beras Idli, Jintan Putih, Asafoetida."

export default function AdaiMixPage() {
  return (
    <ProductDetail
      title="Adai Mix"
      image="/adai.jpeg"
      nutrition={nutrition}
      steps={steps}
      ingredients={ingredients}
      stepsMalay={stepsMalay}
      ingredientsMalay={ingredientsMalay}
      nutritionLabelsMalay={nutritionLabelsMalay}
    />
  )
}

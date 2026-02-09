import { ProductDetail } from "@/components/product-detail"

const nutrition = [
  { label: "Energy", value: "360 Kcal" },
  { label: "Protein", value: "16 gms" },
  { label: "Carbohydrates", value: "72 gms" },
  { label: "Fat", value: "6 gms" },
  { label: "Fiber", value: "5.5 gms" },
]

const nutritionLabelsMalay = [
  { label: "Tenaga", value: "360 Kcal" },
  { label: "Protein", value: "16 gms" },
  { label: "Karbohidrat", value: "72 gms" },
  { label: "Lemak", value: "6 gms" },
  { label: "Serat", value: "5.5 gms" },
]

const steps = [
  "Take one cup of Pongal mix and add 3.5 to 4 cups of water.",
  "Cook for 4 to 5 whistles in a pressure cooker.",
  "Reduce the heat and add curry leaves.",
  "Garnish generously with ghee. Your Pongal is ready to serve!",
]

const stepsMalay = [
  "Ambil satu cawan campuran Pongal dan tambah 3.5 hingga 4 cawan air.",
  "Masak sehingga 4 hingga 5 bunyi wisel dalam periuk tekanan.",
  "Kecilkan api dan tambah daun kari.",
  "Hiaskan dengan banyak ghee. Pongal anda sedia untuk dihidangkan!",
]

const ingredients =
  "Samai, Moong Dal, Black Pepper, Cashew Nut, Cumin, Ginger."

const ingredientsMalay =
  "Samai, Moong Dal, Lada Hitam, Gajus, Jintan Putih, Halia."

export default function PongalMixPage() {
  return (
    <ProductDetail
      title="Millet Pongal Mix"
      image="/pongal.jpeg"
      nutrition={nutrition}
      steps={steps}
      ingredients={ingredients}
      stepsMalay={stepsMalay}
      ingredientsMalay={ingredientsMalay}
      nutritionLabelsMalay={nutritionLabelsMalay}
    />
  )
}

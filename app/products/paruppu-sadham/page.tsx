import { ProductDetail } from "@/components/product-detail"

const nutrition = [
  { label: "Energy", value: "408 Kcal" },
  { label: "Protein", value: "12.5 gms" },
  { label: "Carbohydrates", value: "70 gms" },
  { label: "Fat", value: "5.9 gms" },
  { label: "Fiber", value: "13 gms" },
]

const nutritionLabelsMalay = [
  { label: "Tenaga", value: "408 Kcal" },
  { label: "Protein", value: "12.5 gms" },
  { label: "Karbohidrat", value: "70 gms" },
  { label: "Lemak", value: "5.9 gms" },
  { label: "Serat", value: "13 gms" },
]

const steps = [
  "Take one cup of Paruppu Sadham mix and add 3.5 to 4 cups of water.",
  "Cook for 15 to 20 minutes (4 to 5 whistles in a pressure cooker).",
  "Reduce the heat and add fresh coriander and curry leaves.",
  "Garnish with ghee, mix well, and serve hot!",
]

const stepsMalay = [
  "Ambil satu cawan campuran Paruppu Sadham dan tambah 3.5 hingga 4 cawan air.",
  "Masak selama 15 hingga 20 minit (4 hingga 5 bunyi wisel dalam periuk tekanan).",
  "Kecilkan api dan tambah daun ketumbar segar serta daun kari.",
  "Hiaskan dengan ghee, gaul rata, dan hidangkan panas!",
]

const ingredients =
  "Kuthirai Vali, Toor Dal, Moong Dal, Sambar Powder, Cumin, Salt."

const ingredientsMalay =
  "Kuthirai Vali, Toor Dal, Moong Dal, Serbuk Sambar, Jintan Putih, Garam."

export default function ParuppuSadhamPage() {
  return (
    <ProductDetail
      title="Millet Paruppu Sadham Mix"
      image="/images/paruppu-sadham.jpg"
      nutrition={nutrition}
      steps={steps}
      ingredients={ingredients}
      stepsMalay={stepsMalay}
      ingredientsMalay={ingredientsMalay}
      nutritionLabelsMalay={nutritionLabelsMalay}
    />
  )
}

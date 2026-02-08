import { cn } from "@/lib/utils"

export const Component = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 p-4"
      )}
    >
      <a
        href="https://www.welns.io/product/booking/WFRCHN468667?bk_src=GMAPS110"
        target="_blank"
        className={cn(
          "relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-primary md:bg-white rounded-full group outline outline-1",

          // Padding (responsive)
          "px-5 py-2 text-sm",
          "md:px-7 md:py-3 md:text-base",
          "lg:px-10 lg:py-4 lg:text-lg",
          "xl:px-12 xl:py-5 xl:text-xl"
        )}
      >
        {/* Animated background */}
        <span
          className={cn(
            "absolute rounded rotate-[-40deg] bg-primary ease-out transition-all duration-500",

            // Size of animated circle (responsive)
            "w-40 h-40 -translate-x-full translate-y-full",
            "md:w-52 md:h-52",
            "lg:w-64 lg:h-64",
            "xl:w-72 xl:h-72",

            // Position animation
            "bottom-0 left-0 mb-8 ml-8",
            "group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
          )}
        />

        {/* Text */}
        <span
          className={cn(
            "relative w-full font-serif text-white md:text-2xl lg:text-3xl text-left md:text-black transition-colors duration-300 ease-in-out group-hover:text-white"
          )}
        >
          Book a Slot
        </span>
      </a>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Flower2 } from "lucide-react"
import Image from "next/image"

import Link from "next/link"

export default function CoomingSon() {
    return (
        <div className="min-h-screen bg-[#00211E] to-stone-200">
            {/* Header */}
            <header className="w-full px-4 py-4 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between rounded-full border border-stone-300 bg-white px-6 py-3 backdrop-blur-sm">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Flower2 className="h-6 w-6 text-stone-700" />
                            <span className="text-xl font-semibold text-stone-800">Petal flores</span>
                        </div>

                        <nav className="hidden items-center gap-8 md:flex">
                            <Link href="/" className="text-stone-700 hover:text-stone-900 transition-colors">
                                Inicio
                            </Link>
                            <Link href="/nosotros" className="text-stone-700 hover:text-stone-900 transition-colors">
                                Nosotros
                            </Link>
                            <Link href="/flores" className="text-stone-700 hover:text-stone-900 transition-colors">
                                Flores
                            </Link>
                            <Link href="/plantas" className="text-stone-700 hover:text-stone-900 transition-colors">
                                Plantas
                            </Link>
                            <Link href="/suscripciones" className="text-stone-700 hover:text-stone-900 transition-colors">
                                Suscripciones
                            </Link>
                            <Link href="/regalos" className="text-stone-700 hover:text-stone-900 transition-colors">
                                Regalos
                            </Link>
                        </nav>

                        {/* Contact Button */}
                        <Link href="https://www.linkedin.com/company/flores-petal" target="_blank" rel="noopener noreferrer">
                            <Button className="rounded-full bg-[#000000] px-6 hover:bg-[#F9ECD7] hover:text-black transition-colors duration-200">
                                Comprar ahora
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="px-4 py-8 md:px-8 md:py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                                    Flores para todos los días
                                </h1>

                                <p className="text-lg text-white md:text-xl">
                                    Eleva los momentos cotidianos con nuestros ramos artesanales cuidadosamente arreglados con flores de temporada para brindar belleza, alegría y un toque de naturaleza a tu espacio.
                                </p>
                            </div>

                            {/* Stats and Button */}
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                                <Link href="https://www.linkedin.com/company/flores-petal" target="_blank" rel="noopener noreferrer">
                                    <Button className="w-fit rounded-full bg-white text-black hover:bg-[#F9ECD7] transition-colors duration-200">
                                        Comprar ahora
                                    </Button>
                                </Link>
                                <div className="flex gap-8">
                                    <div>
                                        <div className="text-2xl font-bold text-white">100+</div>
                                        <div className="text-sm text-white">Cultivos aliados</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">12k+</div>
                                        <div className="text-sm text-white">Clientes felices</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Flower Showcase */}
                        <div className="relative">
                            <div className="flex items-center justify-center gap-4">
                                {/* Navigation Arrow Left */}
                                <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:text-stone-800">
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>

                                {/* Flower Cards */}
                                <div className="grid gap-8 sm:grid-cols-2">
                                    {/* January Carnation */}
                                    <div className="text-center">
                                        <div className="relative mb-4 h-64 w-48 mx-auto overflow-hidden rounded-2xl">
                                            <Image
                                                src="/Flowers.jpg"
                                                alt="Rosas"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="font-semibold text-white">Rosas</h3>
                                    </div>

                                    {/* September Aster */}
                                    <div className="text-center">
                                        <div className="relative mb-4 h-64 w-48 mx-auto overflow-hidden rounded-2xl">
                                            <Image
                                                src="/Claveles.jpg"
                                                alt="Claveles"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="font-semibold text-white">Claveles</h3>
                                    </div>
                                </div>

                                {/* Navigation Arrow Right */}
                                <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:text-stone-800">
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* About Section */}
            <section className="px-4 py-16 md:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">¡Muy pronto!</h2>
                    <p className="text-lg text-white md:text-xl">
                        La plataforma de flores y plantas frescas que conecta el campo con la ciudad
                    </p>
                </div>
            </section>

        </div>
    )
}
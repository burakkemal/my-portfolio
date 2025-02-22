"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon, Github, Linkedin, Mail, Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import guncelResim from "@/assets/images/guncelResim.jpg";
import defaultLogo from "@/assets/images/default-logo.png"

type Language = 'en' | 'tr';
type NavSection = 'home' | 'skills' | 'experience' | 'contact';

const technologies = [
  // Architecture (moved up)
  { name: { en: "Microservices", tr: "Mikroservisler" }, color: "bg-purple-500", category: "Architecture" },
  { name: { en: "N-Layer Architecture", tr: "N-Katmanlı Mimari" }, color: "bg-purple-600", category: "Architecture" },

  // Backend
  { name: { en: "Java (8/11/17)", tr: "Java (8/11/17)" }, color: "bg-red-500", category: "Backend" },
  { name: { en: "Spring Framework", tr: "Spring Framework" }, color: "bg-green-500", category: "Backend" },
  { name: { en: "Hibernate", tr: "Hibernate" }, color: "bg-blue-600", category: "Backend" },

  // Database
  { name: { en: "Redis", tr: "Redis" }, color: "bg-red-600", category: "Database" },
  { name: { en: "PostgreSQL", tr: "PostgreSQL" }, color: "bg-blue-400", category: "Database" },
  { name: { en: "Flyway", tr: "Flyway" }, color: "bg-indigo-500", category: "Database" },

  // DevOps
  { name: { en: "Docker", tr: "Docker" }, color: "bg-blue-500", category: "DevOps" },
  { name: { en: "Jenkins", tr: "Jenkins" }, color: "bg-blue-600", category: "DevOps" },

  // Frontend
  { name: { en: "React", tr: "React" }, color: "bg-blue-400", category: "Frontend" },
  { name: { en: "Angular", tr: "Angular" }, color: "bg-red-500", category: "Frontend" },

  // Message Broker
  { name: { en: "RabbitMQ", tr: "RabbitMQ" }, color: "bg-orange-500", category: "Message Broker" },
  { name: { en: "ActiveMQ", tr: "ActiveMQ" }, color: "bg-orange-600", category: "Message Broker" },

  // Integration
  { name: { en: "WSO2", tr: "WSO2" }, color: "bg-teal-500", category: "Integration" },

  // BPM
  { name: { en: "Camunda", tr: "Camunda" }, color: "bg-yellow-500", category: "BPM" },
]

const experiences = [
  {
    company: "SNI",
    logo: defaultLogo,
    position: { en: "Experienced Software Developer", tr: "Deneyimli Yazılım Geliştirici" },
    period: { en: "January 2023 - Present", tr: "Ocak 2023 - Devam Ediyor" },
    location: { en: "Antalya, Turkey", tr: "Antalya, Türkiye" },
    responsibilities: {
      en: [
        "Development of new projects with microservice architecture",
        "Application development and bug fixing in various projects according to customer demands",
        "Preparation and management of infrastructure solutions such as caching and messaging",
        "Development with Java 8, 11, and 17 versions",
        "Application development with Spring Framework",
        "Use of Redis, RabbitMQ, and Docker technologies",
        "Database migration management with Flyway"
      ],
      tr: [
        "Mikroservis mimarisi ile yeni projelerin geliştirilmesi",
        "Müşteri talepleri doğrultusunda çeşitli projelerde uygulama ve hata giderme",
        "Caching, messaging gibi altyapı çözümlerinin hazırlanması ve yönetimi",
        "Java 8, 11 ve 17 versiyonları ile geliştirme",
        "Spring Framework ile uygulama geliştirme",
        "Redis, RabbitMQ ve Docker teknolojilerinin kullanımı",
        "Flyway ile veritabanı migrasyon yönetimi"
      ],
    },
  },
  {
    company: "Etiya",
    logo: defaultLogo,
    position: { en: "Software Development Specialist", tr: "Yazılım Geliştirme Uzmanı" },
    period: { en: "November 2021 - November 2023", tr: "Kasım 2021 - Kasım 2023" },
    location: { en: "Ankara, Turkey", tr: "Ankara, Türkiye" },
    responsibilities: {
      en: [
        "CRM project development for Ooredoo, Dhiraagu, and Bouygues Telecom",
        "Creating REST APIs, code reviews, and problem-solving",
        "Development with REST and JSON, SOAP, XML parsers in WSO2 environment",
        "Service deployment and product support activities management",
        "Use of Java, WSO2 API Manager, WSO2 Enterprise Integrator technologies",
        "PostgreSQL database management",
        "Project tracking with JIRA",
        "XML - JSON conversions and XSLT transformations",
        "Experienced in designing and implementing business process automation using Camunda BPM, including workflow orchestration and process optimization."
      ],
      tr: [
        "Ooredoo, Dhiraagu ve Bouygues Telecom için CRM projeleri geliştirme",
        "REST API'ler oluşturma, kod gözden geçirme ve problem çözümleri üretme",
        "WSO2 ortamında REST ve JSON, SOAP, XML parser'ları ile geliştirme",
        "Servis dağıtımı ve ürün destek aktiviteleri yönetimi",
        "Java, WSO2 API Manager, WSO2 Enterprise Integrator teknolojileri kullanımı",
        "PostgreSQL veritabanı yönetimi",
        "JIRA ile proje takibi",
        "İş akışı orkestrasyonu ve süreç optimizasyonu dahil olmak üzere Camunda BPM kullanarak iş süreci otomasyonunu tasarlama ve uygulama konusunda deneyimli."
      ],
    },
  },
]

const projects = []

const translations: Record<Language, {
  home: string;
  skills: string;
  experience: string;
  contact: string;
  greeting: string;
  title: string;
  description: string;
  contactButton: string;
  skillsTitle: string;
  experienceTitle: string;
  contactTitle: string;
}> = {
  en: {
    home: "Home",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    greeting: "Hello, I'm Burak Kemal Koyuncu",
    title: "Full Stack Developer | Antalya, Turkey",
    description:
      "I'm a software developer with 4+ years of experience, creating innovative and scalable solutions using modern technologies. I'm here to build user-focused, high-performance, and sustainable projects. Let's work together to turn your dream project into reality!",
    contactButton: "Get in Touch",
    skillsTitle: "Technologies & Skills",
    experienceTitle: "Experience",
    contactTitle: "Get in Touch",
  },
  tr: {
    home: "Ana Sayfa",
    skills: "Yetenekler",
    experience: "Deneyim",
    contact: "İletişim",
    greeting: "Merhaba, Ben Burak Kemal Koyuncu",
    title: "Full Stack Geliştirici | Antalya, Türkiye",
    description:
      "Modern teknolojilerle yenilikçi ve ölçeklenebilir çözümler geliştiren, 4+ yıllık deneyime sahip bir yazılım geliştiriciyim. Kullanıcı odaklı, performanslı ve sürdürülebilir projeler oluşturmak için buradayım. Hayalinizdeki projeyi gerçeğe dönüştürmek için birlikte çalışalım!",
    contactButton: "İletişime Geçin",
    skillsTitle: "Teknolojiler & Yetenekler",
    experienceTitle: "Deneyim",
    contactTitle: "İletişime Geçin",
  },
}


export default function Portfolio() {
  const [theme, setTheme] = useState("dark")
  const [activeSection, setActiveSection] = useState<NavSection>('home')
  const [language, setLanguage] = useState<Language>('en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.className = theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#111827' // bg-gray-900
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#ffffff'
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const t = translations[language]

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300 min-w-full`}
    >
      <header className="fixed w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Burak Kemal Koyuncu
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleLanguage}>
              <Globe className="h-5 w-5" />
            </Button>
            {(['home', 'skills', 'experience', 'contact'] as const).map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => setActiveSection(section)}
                className={activeSection === section ? "text-primary" : ""}
              >
                {t[section]}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t dark:border-gray-800"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Button variant="ghost" size="sm" onClick={toggleLanguage} className="justify-start">
                  <Globe className="h-5 w-5 mr-2" />
                  {language === "en" ? "English" : "Türkçe"}
                </Button>
                {(['home', 'skills', 'experience', 'contact'] as const).map((section) => (
                  <Button
                    key={section}
                    variant="ghost"
                    onClick={() => {
                      setActiveSection(section)
                      setIsMenuOpen(false)
                    }}
                    className={`justify-start ${activeSection === section ? "text-primary" : ""}`}
                  >
                    {t[section]}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20 flex-grow">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex items-center justify-center px-4"
            >
              <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-left order-2 md:order-1"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.greeting}</h2>
                  <p className="text-xl md:text-2xl mb-6">{t.title}</p>
                  <p className="max-w-xl mb-8">{t.description}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button onClick={() => setActiveSection("contact")} size="lg">
                      {t.contactButton}
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative order-1 md:order-2"
                >
                  <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto">
                    <Image
                      src={guncelResim}
                      alt="Burak Kemal Koyuncu"
                      fill
                      className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                      sizes="(max-width: 768px) 250px, 400px"
                      priority
                      quality={100}
                    />
                    <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "skills" && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen py-20 px-4"
            >
              <div className="container mx-auto max-w-4xl">
                <h3 className="text-3xl font-semibold mb-10 text-center">{t.skillsTitle}</h3>
                <div className="grid gap-8">
                  {[
                    "Backend",
                    "Frontend",
                    "Database",
                    "DevOps",
                    "Architecture",
                    "Message Broker",
                    "Integration",
                    "BPM",
                  ].map((category) => {
                    const categoryTechs = technologies.filter((tech) => tech.category === category)
                    if (categoryTechs.length === 0) return null

                    return (
                      <div key={category}>
                        <h4 className="text-xl font-semibold mb-4">{category}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {categoryTechs.map((tech, index) => (
                            <motion.div
                              key={tech.name.en} // Use en key for uniqueness
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className={`text-lg py-2 px-4 w-full justify-center ${tech.color} text-white`}
                              >
                                {tech.name[language]}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "experience" && (
            <motion.section
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen py-20 px-4"
            >
              <div className="container mx-auto max-w-4xl">
                <h3 className="text-3xl font-semibold mb-10 text-center">{t.experienceTitle}</h3>
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <Image
                            src={exp.logo || defaultLogo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">{exp.position[language]}</h4>
                          <p className="text-primary">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period[language]} | {exp.location[language]}
                          </p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                        {exp.responsibilities[language].map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center items-center px-4"
            >
              <h3 className="text-3xl font-semibold mb-10">{t.contactTitle}</h3>
              <div className="flex justify-center space-x-6">
                <Link href="https://github.com/burakkemal" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="outline" size="icon" className="rounded-full w-16 h-16">
                      <Github className="h-8 w-8" />
                    </Button>
                  </motion.div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/burak-kemal-koyuncu-0327aa205/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="outline" size="icon" className="rounded-full w-16 h-16">
                      <Linkedin className="h-8 w-8" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="mailto:burakkemalkoyuncu@gmail.com">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="outline" size="icon" className="rounded-full w-16 h-16">
                      <Mail className="h-8 w-8" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-auto w-full py-4 text-center">
        <p>&copy; 2025 Burak Kemal Koyuncu. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}</p>
      </footer>
    </div>
  )
}


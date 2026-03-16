export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            НДМ
          </a>
          <div className="flex space-x-8">
            <a href="#theory" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Теория
            </a>
            <a href="#games" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Игры
            </a>
            <a href="#conclusion" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Заключение
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section — Слайд 1 */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Дипломная работа</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              ФОРМИРОВАНИЕ
              <br />
              НАГЛЯДНО-
              <br />
              ДЕЙСТВЕННОГО
              <br />
              МЫШЛЕНИЯ
            </h1>
            <p className="text-xl max-w-xl mt-6">
              У детей с нарушением интеллекта
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-end justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <p className="text-sm uppercase tracking-widest mb-4">Два пути развития мышления</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold mt-0.5">I</span>
                    <p className="text-sm">Восприятие → Наглядно-действенное → Наглядно-образное → Логическое</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold mt-0.5">II</span>
                    <p className="text-sm">Восприятие → Наглядно-образное → Логическое</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-black pt-8">
          <p className="text-base max-w-3xl text-neutral-700">
            Оба пути развития существуют одновременно и, хотя на определённом этапе сливаются воедино,
            имеют свою специфику и играют особую роль в познавательной деятельности человека.
          </p>
        </div>
      </section>

      {/* Theory Section — Слайды 2–4 */}
      <section id="theory" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ТЕОРИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Слайд 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Сущность НДМ в норме</h3>
              <p className="text-neutral-400">Наглядно-действенное мышление — ранняя форма мышления, формирующаяся в процессе практических манипуляций с предметами</p>
            </div>

            {/* Слайд 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Особенности при нарушении интеллекта</h3>
              <p className="text-neutral-400">Слабая связь между действием, словом и образом; трудности переноса способа действия; замедленное формирование операций</p>
            </div>

            {/* Слайд 4 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">04</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Пути формирования НДМ</h3>
              <p className="text-neutral-400">Система специально организованных игр-упражнений, коррекционная работа с опорой на предметно-практическую деятельность</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section — описание подхода */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О РАБОТЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <p className="text-center text-sm uppercase tracking-widest text-neutral-500 z-10 px-8">
                  Коррекционная<br />педагогика
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Формирование наглядно-действенного мышления у детей с нарушением интеллекта
                является основой для развития более сложных форм мыслительной деятельности.
              </p>
              <p className="mb-6">
                Преодоление слабой взаимосвязи между действием, словом и образом через систему
                специально организованных игр-упражнений позволяет подготовить детей к школьному
                обучению и успешной социализации.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Задачи работы</h3>
                  <ul className="space-y-2">
                    <li>Анализ литературы</li>
                    <li>Изучение особенностей НДМ</li>
                    <li>Разработка игр</li>
                    <li>Апробация методик</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Методы</h3>
                  <ul className="space-y-2">
                    <li>Дидактические игры</li>
                    <li>Предметная деятельность</li>
                    <li>Наблюдение</li>
                    <li>Эксперимент</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section — Слайды 5–7 */}
      <section id="games" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ИГРЫ</h2>
          <p className="text-neutral-400 mb-12 text-lg">Система коррекционных игр-упражнений</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20">
            {/* Игра 1 */}
            <div className="border-b md:border-b-0 md:border-r border-white/20 p-8 group hover:bg-red-600 transition-colors duration-300">
              <div className="text-7xl font-bold mb-6 text-white/20 group-hover:text-white/40 transition-colors">05</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Лови шарик!</h3>
              <p className="text-neutral-400 group-hover:text-white/80 transition-colors">
                Игра на развитие зрительно-двигательной координации и пространственного восприятия.
                Ребёнок учится отслеживать траекторию движения предмета и выполнять целенаправленные действия.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm uppercase tracking-widest text-neutral-500 group-hover:text-white/60 transition-colors">Слайд 5</p>
              </div>
            </div>

            {/* Игра 2 */}
            <div className="border-b md:border-b-0 md:border-r border-white/20 p-8 group hover:bg-red-600 transition-colors duration-300">
              <div className="text-7xl font-bold mb-6 text-white/20 group-hover:text-white/40 transition-colors">06</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Покорми мишку!</h3>
              <p className="text-neutral-400 group-hover:text-white/80 transition-colors">
                Игра на формирование орудийных действий и понимания причинно-следственных связей.
                Ребёнок осваивает целенаправленное использование предметов.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm uppercase tracking-widest text-neutral-500 group-hover:text-white/60 transition-colors">Слайд 6</p>
              </div>
            </div>

            {/* Игра 3 */}
            <div className="p-8 group hover:bg-red-600 transition-colors duration-300">
              <div className="text-7xl font-bold mb-6 text-white/20 group-hover:text-white/40 transition-colors">07</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Покатаем зайчиков!</h3>
              <p className="text-neutral-400 group-hover:text-white/80 transition-colors">
                Игра на развитие взаимодействия с предметами и формирование представлений о свойствах объектов.
                Совместная игровая деятельность стимулирует речевое сопровождение действий.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm uppercase tracking-widest text-neutral-500 group-hover:text-white/60 transition-colors">Слайд 7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section — Слайд 8 */}
      <section id="conclusion" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm uppercase tracking-widest mb-4 text-white/70">Слайд 8</p>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ЗАКЛЮЧЕНИЕ</h2>
              <p className="text-xl mb-8">
                Формирование НДМ у детей с нарушением интеллекта — фундамент для развития всей мыслительной деятельности.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold mt-1">→</span>
                  <p>Система игр-упражнений преодолевает слабую взаимосвязь между действием, словом и образом</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold mt-1">→</span>
                  <p>Специально организованное обучение готовит детей к школьному обучению</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold mt-1">→</span>
                  <p>Коррекционная работа обеспечивает успешную социализацию ребёнка</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="bg-white/10 p-8 mb-6">
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Вывод</h3>
                <p className="text-white/90 leading-relaxed">
                  Преодоление слабой взаимосвязи между действием, словом и образом через систему
                  специально организованных игр-упражнений позволяет подготовить детей с нарушением
                  интеллекта к школьному обучению и успешной социализации.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 p-4">
                  <p className="text-4xl font-bold">3</p>
                  <p className="text-sm uppercase tracking-widest mt-1 text-white/70">Игры</p>
                </div>
                <div className="bg-white/10 p-4">
                  <p className="text-4xl font-bold">2</p>
                  <p className="text-sm uppercase tracking-widest mt-1 text-white/70">Пути НДМ</p>
                </div>
                <div className="bg-white/10 p-4">
                  <p className="text-4xl font-bold">8</p>
                  <p className="text-sm uppercase tracking-widest mt-1 text-white/70">Слайдов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm uppercase tracking-widest">НДМ — Наглядно-действенное мышление</p>
          <p className="text-sm text-neutral-500">Дипломная работа</p>
        </div>
      </footer>
    </main>
  );
}

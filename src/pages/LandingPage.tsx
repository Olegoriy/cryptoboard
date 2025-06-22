const LandingPage = () => {
  return (
    <div
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Аналитика крипторынка <br /> нового поколения
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto mb-10"
              style={{ color: 'var(--color-text)', opacity: 0.8 }}
            >
              Полный контроль над вашими криптоактивами. Отслеживание, аналитика и прогнозирование в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                style={{
                  background: 'var(--color-text)',
                  color: 'var(--color-bg)',
                }}
                className="font-medium py-3 px-8 rounded-lg transition duration-200 items-center"
              >
                Начать бесплатно
              </button>
              <button
                style={{
                  border: '1px solid',
                  borderColor: 'var(--color-text)',
                  color: 'var(--color-text)',
                  background: 'transparent',
                }}
                className="font-medium py-3 px-8 rounded-lg transition duration-200"
              >
                Демо-версия
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ background: 'rgba(0,0,0,0.04)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Мощные инструменты для трейдинга</h2>
            <p style={{ color: 'var(--color-text)', opacity: 0.7 }} className="max-w-2xl mx-auto">
              Все необходимое для успешной торговли на крипторынке
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Реальная аналитика",
                description: "Актуальные данные с бирж с минимальной задержкой"
              },
              {
                title: "Безопасность",
                description: "Ваши данные защищены банковским уровнем шифрования"
              },
              {
                title: "Мультивалютность",
                description: "Поддержка всех основных криптовалют и фиата"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transition duration-200"
                style={{
                  background: 'rgba(0,0,0,0.08)',
                  color: 'var(--color-text)',
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p style={{ opacity: 0.7 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Гибкие тарифы</h2>
            <p style={{ color: 'var(--color-text)', opacity: 0.7 }} className="max-w-2xl mx-auto">
              Выберите подходящий вариант для ваших нужд
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "Бесплатно",
                features: ["До 5 портфелей", "Базовая аналитика", "Оповещения по email"]
              },
              {
                name: "Профессиональный",
                price: "$29/мес",
                features: ["До 20 портфелей", "Расширенная аналитика", "API доступ", "Приоритетная поддержка"],
                popular: true
              },
              {
                name: "Корпоративный",
                price: "Индивидуально",
                features: ["Неограниченные портфели", "White-label решение", "Персональный менеджер", "Dedicated сервер"]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden transition"
                style={{
                  background: 'rgba(0,0,0,0.08)',
                  borderColor: plan.popular ? '#3b82f6' : 'rgba(0,0,0,0.12)',
                  color: 'var(--color-text)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              >
                {plan.popular && (
                  <div style={{ background: '#3b82f6', color: '#fff' }} className="text-center py-1 text-sm font-medium">
                    Популярный
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-8 w-full py-3 rounded-lg font-medium transition duration-200"
                    style={{
                      background: plan.popular ? '#3b82f6' : 'rgba(0,0,0,0.12)',
                      color: plan.popular ? '#fff' : 'var(--color-text)',
                    }}
                  >
                    Выбрать план
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
// resp = Responsibility

const resp = () => {
  const app = document.getElementById('app') as HTMLElement;
  const header = document.createElement('header') as HTMLElement;
  header.classList.remove('bg-opacity-0');

  const bg = document.createElement('div');
  bg.classList.add(
    'bg-background-light',
    'w-full',
    'h-screen',
    'flex',
    'justify-center',
    'items-center'
  );

  const container = document.createElement('div');
  container.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'p-10', 'flex-col');

  const headingContainer = document.createElement('div');
  headingContainer.classList.add(
    'text-red',
    'font-bold',
    'h-1/6',
    'w-1/1',
    'flex',
    'justify-center',
    'p-10'
  );

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('flex', 'h-5/6');

  const textContainer = document.createElement('div');
  textContainer.classList.add('flex-1', 'justify-left', 'p-20');

  const photoContainer = document.createElement('div');
  photoContainer.classList.add('flex-1', 'justify-center', 'p-20');

  const img = document.createElement('img');
  img.src = '/img/respImg.jpg';
  photoContainer.append(img);

  const heading = document.createElement('h1');
  heading.classList.add('text-6xl');
  heading.textContent = 'VASTUULLISUUS';

  const p = document.createElement('p');
  p.classList.add('text-lg', 'text-black', 'whitespace-pre-line');

  const text = `Meille Royal Bunsilla vastuullisuus on sydämen asia, ja haluamme olla mukana tukemassa suomalaista yhteiskuntaa monin tavoin. Yksi keskeisistä arvoistamme on paikallisuuden ja kotimaisuuden suosiminen. Käytämme valmistuksessa 94 % suomalaisia raaka-aineita, sillä uskomme vahvasti siihen, että kotimaiset tuotteet ovat paitsi laadukkaita, myös ympäristön ja yhteisön kannalta kestävä valinta. Hankkimalla raaka-aineemme paikallisilta tuottajilta varmistamme tuoreuden ja korkean laadun, samalla vähentäen kuljetusten aiheuttamia päästöjä.

  Haluamme myös varmistaa, että työllistämme vain suomalaista työvoimaa, sillä paikallisen osaamisen arvostaminen on meille tärkeää. Tämä sitoutuminen kotimaiseen työvoimaan tukee paikallista taloutta ja antaa meille mahdollisuuden tarjota työpaikkoja ihmisille eri puolilla Suomea. Varmistamme, että henkilöstömme työolot ovat turvalliset ja reilut, ja kannustamme jatkuvaan koulutukseen ja ammattitaidon kehittämiseen.

  Vastuullisuus ei ole meille vain valinta – se on lupaus siitä, että toimimme oikein sekä ympäristön että yhteiskunnan puolesta. Uskomme, että kestävä ja vastuullinen liiketoiminta luo pitkäaikaista arvoa kaikille, ja siksi olemme sitoutuneet kotimaisten raaka-aineiden ja työvoiman käyttöön jokaisessa vaiheessa.`;
  p.textContent = text;

  contentContainer.append(textContainer, photoContainer);

  headingContainer.append(heading);
  textContainer.append(p);
  container.append(headingContainer, contentContainer);
  bg.appendChild(container);
  app.prepend(bg);
};

export {resp};

import React from 'react';
import Layout from '../components/Layout';

const links = [
  {
    href: 'https://www.meetup.com/Chennai-Web-Meetup',
    label: 'Meetup',
    icon: 'meetup.png'
  },
  {
    href: 'https://github.com/chennai-web-group/',
    label: 'GitHub',
    icon: 'github.png'
  },
  {
    href: 'http://twitter.com/ChennaiWebGroup',
    label: 'Twitter',
    icon: 'twitter.png'
  },
  {
    href: 'https://www.youtube.com/channel/UCjMbw7Yt8nockWPcra1dfUQ',
    label: 'YouTube',
    icon: 'youtube.png'
  }
].map(link => {
  link.key = link.label;
  return link;
});

const Home = () => (
  <div>
    <Layout title="Home | Chennai Web Group">
      <div className="mt-24 text-center">
        <header className="text-6xl">Chennai Web Group</header>
        <div className="text-xl">
          A place where Chennai based (but not limited to) web developers hang
          out to accomplish things
        </div>
        <div className="mt-6">
          {links.map(link => (
            <a
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`./assets/images/${link.icon}`}
                alt={link.label}
                className="inline-block mx-4"
              />
            </a>
          ))}
        </div>
      </div>
    </Layout>

    <style jsx>{`
      img {
        width: 60px;
      }
    `}</style>
  </div>
);

export default Home;

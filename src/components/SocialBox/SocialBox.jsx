import './socialBox.css'

export const SocialBox = () => {
  return (
    <section className="social__box container">
      <div className="social__box-content">
        <div className="content__left">
          <h2>
            Social<span>Bembos</span>
          </h2>
          <p className="content__share-text">Compartir en</p>
          <div className="content__buttons">
            <button className="content__button content__button--twitter">
              <img src="./src/assets/twitter.svg" alt="Twitter" />
              Twitter
            </button>
            <button className="content__button content__button--facebook">
              <img src="./src/assets/facebook.svg" alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
        <div className="content__right">
          <img src="./src/assets/descarga.png" alt="Bembos" loading="lazy" />
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbembos%2F&amp;tabs&amp;width=500&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
            width="500"
            height="130"
            allowFullScreen="allowfullscreen"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{ border: "none", overflow: "hidden" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

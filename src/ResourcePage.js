import React from "react";

const Resources = () => {
  return (
    <div>
      <div>
        <div class="flex2-item-1 main-resource">
          <h2>Additional Resources</h2>
          <p>
            If you are interested in more about how food choices and
            sustainability intertwine, there are plenty of resources available
            to explore further how your choice impacts the planet. Feel free to
            read more about the topics below to learn more!
          </p>
        </div>
        <iframe
          className="youtube"
          src="https://www.youtube.com/embed/PyiVf26C5pc"
          title="Food Science"
        ></iframe>
        <ul class="cards-resource ">
          <li class="cards_item-resource ">
            <div class="card-resource ">
              <div class="card_image-resource ">
                <img src={`${process.env.PUBLIC_URL}/food.jpg`} alt="food" />
              </div>
              <div class="card_content-resource ">
                <h2 class="card_title-resource ">Food Sciences</h2>
                <p class="card_text-resource ">
                  Why low carbon emssion Food are good for you
                </p>
                <a href="https://www.sierraclub.org/sierra/low-carbon-diets-are-good-for-planet-and-your-health">
                  <button class="btn-resource card_btn-resource">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item-resource ">
            <div class="card-resource ">
              <div class="card_image-resource ">
                <img src={`${process.env.PUBLIC_URL}/img2.jpg`} alt="img2" />
              </div>
              <div class="card_content-resource ">
                <h2 class="card_title-resource ">Interview with Expert</h2>
                <p class="card_text-resource ">
                  How experts think about this issue
                </p>
                <a href="https://www.npr.org/2021/11/11/1054884140/when-consumers-want-to-reduce-their-carbon-footprint-food-choices-matter ">
                  <button class="btn-resource card_btn-resource">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item-resource ">
            <div class="card-resource ">
              <div class="card_image-resource ">
                <img src={`${process.env.PUBLIC_URL}/img3.jpg`} alt="img3" />
              </div>
              <div class="card_content-resource ">
                <h2 class="card_title-resource ">Food Guides</h2>
                <p class="card_text-resource ">
                  Breakdown views to know food carbon emssion
                </p>
                <a href="https://www.bbcgoodfood.com/howto/guide/what-food-carbon-footprint ">
                  <button class="btn-resource card_btn-resource">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item-resource ">
            <div class="card-resource ">
              <div class="card_image-resource ">
                <img src={`${process.env.PUBLIC_URL}/img4.jpg`} alt="img4" />
              </div>
              <div class="card_content-resource ">
                <h2 class="card_title-resource ">Informational Stories</h2>
                <p class="card_text-resource ">
                  Let's take a look on other people's stories
                </p>
                <a href="https://www.carbonbrief.org/food-systems-responsible-for-one-third-of-human-caused-emissions">
                  <button class="btn-resource card_btn-resource">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item-resource ">
            <div class="card-resource ">
              <div class="card_image-resource ">
                <img src={`${process.env.PUBLIC_URL}/img5.jpg`} alt="img5" />
              </div>
              <div class="card_content-resource ">
                <h2 class="card_title-resource ">Fact Sheets</h2>
                <p class="card_text-resource ">
                  Quick facts about food carbon footprint
                </p>
                <a href="https://css.umich.edu/factsheets/carbon-footprint-factsheet ">
                  <button class="btn-resource card_btn-resource">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item-resource ">
            <div class="card-resource ">
              <div class="card_image-resource ">
                <img src={`${process.env.PUBLIC_URL}/img6.jpg`} alt="img6" />
              </div>
              <div class="card_content-resource ">
                <h2 class="card_title-resource ">Sustainability Stories</h2>
                <p class="card_text-resource ">
                  How to live a susatinable lifestyle
                </p>
                <a href="https://time.com/6114999/carbon-emissions-food/">
                  <button
                    class="btn-resource card_btn-resource"
                    href="https://ourworldindata.org/food-choice-vs-eating-local"
                  >
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;

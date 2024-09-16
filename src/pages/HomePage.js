import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";
import "../assets/styles/homePage.css";
import { initScrollAnimation } from "../assets/styles/\banimations/home/main";

function HomePage() {
  useEffect(() => {
    // 이 컴포넌트에서 initScrollAnimation 함수를 호출하여 스크롤 애니메이션을 초기화합니다.
    // 컴포넌트가 언마운트될 때 클린업 함수를 호출하여 메모리 누수를 방지합니다.
    const cleanup = initScrollAnimation();

    // 컴포넌트 언마운트 시 클린업 함수 호출
    return cleanup;
  }, []);

  return (
    <div>
      {/* // TODO section 0: 글자 스크롤 + 맥북 비디오 */}
      <section className="scroll-section" id="scroll-section-0">
        <h1>MacBook Air</h1>
        <div className="sticky-elem main-message a">
          <p>날렵하게. 강력하게. M3답게.</p>
        </div>
        <div className="sticky-elem main-message b">
          <p>어디서나 종횡무진할 수 있도록.</p>
        </div>
        <div className="sticky-elem main-message c">
          <p>강력함이 한가득.</p>
        </div>
      </section>
      {/* // TODO section 1: 글자 스크롤 + 맥북 비디오 */}
      <section className="scroll-section" id="scroll-section-1">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni maxime
          tempora rem tempore, expedita nisi, reprehenderit deserunt sit
          perspiciatis, illum magnam omnis saepe rerum voluptatum? Suscipit
          eaque quidem quaerat quae accusantium laborum dignissimos placeat!
          Rerum ex, quas ipsum vero quod aspernatur voluptate officia labore
          asperiores, quo animi perspiciatis error porro ea, repudiandae
          consequuntur eum vitae minima voluptatibus! Sint, consequatur minima
          deserunt adipisci repudiandae fuga laborum quo corrupti neque! Alias
          non temporibus harum ex quibusdam numquam nulla voluptate ab magni,
          esse officia facilis quam repudiandae accusantium incidunt architecto
          omnis nesciunt quidem voluptatibus, unde ratione obcaecati sequi
          laborum. Voluptatum obcaecati veniam deleniti. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Magni maxime tempora rem tempore,
          expedita nisi, reprehenderit deserunt sit perspiciatis, illum magnam
          omnis saepe rerum voluptatum? Suscipit eaque quidem quaerat quae
          accusantium laborum dignissimos placeat! Rerum ex, quas ipsum vero
          quod aspernatur voluptate officia labore asperiores, quo animi
          perspiciatis error porro ea, repudiandae consequuntur eum vitae minima
          voluptatibus! Sint, consequatur minima deserunt adipisci repudiandae
          fuga laborum quo corrupti neque! Alias non temporibus harum ex
          quibusdam numquam nulla voluptate ab magni, esse officia facilis quam
          repudiandae accusantium incidunt architecto omnis nesciunt quidem
          voluptatibus, unde ratione obcaecati sequi laborum. Voluptatum
          obcaecati veniam deleniti. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Magni maxime tempora rem tempore, expedita nisi,
          reprehenderit deserunt sit perspiciatis, illum magnam omnis saepe
          rerum voluptatum? Suscipit eaque quidem quaerat quae accusantium
          laborum dignissimos placeat! Rerum ex, quas ipsum vero quod aspernatur
          voluptate officia labore asperiores, quo animi perspiciatis error
          porro ea, repudiandae consequuntur eum vitae minima voluptatibus!
          Sint, consequatur minima deserunt adipisci repudiandae fuga laborum
          quo corrupti neque! Alias non temporibus harum ex quibusdam numquam
          nulla voluptate ab magni, esse officia facilis quam repudiandae
          accusantium incidunt architecto omnis nesciunt quidem voluptatibus,
          unde ratione obcaecati sequi laborum. Voluptatum obcaecati veniam
          deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni maxime tempora rem tempore, expedita nisi, reprehenderit
          deserunt sit perspiciatis, illum magnam omnis saepe rerum voluptatum?
          Suscipit eaque quidem quaerat quae accusantium laborum dignissimos
          placeat! Rerum ex, quas ipsum vero quod aspernatur voluptate officia
          labore asperiores, quo animi perspiciatis error porro ea, repudiandae
          consequuntur eum vitae minima voluptatibus! Sint, consequatur minima
          deserunt adipisci repudiandae fuga laborum quo corrupti neque! Alias
          non temporibus harum ex quibusdam numquam nulla voluptate ab magni,
          esse officia facilis quam repudiandae accusantium incidunt architecto
          omnis nesciunt quidem voluptatibus, unde ratione obcaecati sequi
          laborum. Voluptatum obcaecati veniam deleniti. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Magni maxime tempora rem tempore,
          expedita nisi, reprehenderit deserunt sit perspiciatis, illum magnam
          omnis saepe rerum voluptatum? Suscipit eaque quidem quaerat quae
          accusantium laborum dignissimos placeat! Rerum ex, quas ipsum vero
          quod aspernatur voluptate officia labore asperiores, quo animi
          perspiciatis error porro ea, repudiandae consequuntur eum vitae minima
          voluptatibus! Sint, consequatur minima deserunt adipisci repudiandae
          fuga laborum quo corrupti neque! Alias non temporibus harum ex
          quibusdam numquam nulla voluptate ab magni, esse officia facilis quam
          repudiandae accusantium incidunt architecto omnis nesciunt quidem
          voluptatibus, unde ratione obcaecati sequi laborum. Voluptatum
          obcaecati veniam deleniti. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Magni maxime tempora rem tempore, expedita nisi,
          reprehenderit deserunt sit perspiciatis, illum magnam omnis saepe
          rerum voluptatum? Suscipit eaque quidem quaerat quae accusantium
          laborum dignissimos placeat! Rerum ex, quas ipsum vero quod aspernatur
          voluptate officia labore asperiores, quo animi perspiciatis error
          porro ea, repudiandae consequuntur eum vitae minima voluptatibus!
          Sint, consequatur minima deserunt adipisci repudiandae fuga laborum
          quo corrupti neque! Alias non temporibus harum ex quibusdam numquam
          nulla voluptate ab magni, esse officia facilis quam repudiandae
          accusantium incidunt architecto omnis nesciunt quidem voluptatibus,
          unde ratione obcaecati sequi laborum. Voluptatum obcaecati veniam
          deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni maxime tempora rem tempore, expedita nisi, reprehenderit
          deserunt sit perspiciatis, illum magnam omnis saepe rerum voluptatum?
          Suscipit eaque quidem quaerat quae accusantium laborum dignissimos
          placeat! Rerum ex, quas ipsum vero quod aspernatur voluptate officia
          labore asperiores, quo animi perspiciatis error porro ea, repudiandae
          consequuntur eum vitae minima voluptatibus! Sint, consequatur minima
          deserunt adipisci repudiandae fuga laborum quo corrupti neque! Alias
          non temporibus harum ex quibusdam numquam nulla voluptate ab magni,
          esse officia facilis quam repudiandae accusantium incidunt architecto
          omnis nesciunt quidem voluptatibus, unde ratione obcaecati sequi
          laborum. Voluptatum obcaecati veniam deleniti. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Magni maxime tempora rem tempore,
          expedita nisi, reprehenderit deserunt sit perspiciatis, illum magnam
          omnis saepe rerum voluptatum? Suscipit eaque quidem quaerat quae
          accusantium laborum dignissimos placeat! Rerum ex, quas ipsum vero
          quod aspernatur voluptate officia labore asperiores, quo animi
          perspiciatis error porro ea, repudiandae consequuntur eum vitae minima
          voluptatibus! Sint, consequatur minima deserunt adipisci repudiandae
          fuga laborum quo corrupti neque! Alias non temporibus harum ex
          quibusdam numquam nulla voluptate ab magni, esse officia facilis quam
          repudiandae accusantium incidunt architecto omnis nesciunt quidem
          voluptatibus, unde ratione obcaecati sequi laborum. Voluptatum
          obcaecati veniam deleniti.
        </p>
      </section>
      {/* // TODO section 1: 글자 스크롤 + 맥북 비디오 */}
      <section className="scroll-section" id="scroll-section-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni maxime
          tempora rem tempore, expedita nisi, reprehenderit deserunt sit
          perspiciatis, illum magnam omnis saepe rerum voluptatum? Suscipit
          eaque quidem quaerat quae accusantium laborum dignissimos placeat!
          Rerum ex, quas ipsum vero quod aspernatur voluptate officia labore
          asperiores, quo animi perspiciatis error porro ea, repudiandae
          consequuntur eum vitae minima voluptatibus! Sint, consequatur minima
          deserunt adipisci repudiandae fuga laborum quo corrupti neque! Alias
          non temporibus harum ex quibusdam numquam nulla voluptate ab magni,
          esse officia facilis quam repudiandae accusantium incidunt architecto
          omnis nesciunt quidem voluptatibus, unde ratione obcaecati sequi
          laborum. Voluptatum obcaecati veniam deleniti. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Magni maxime tempora rem tempore,
          expedita nisi, reprehenderit deserunt sit perspiciatis, illum magnam
          omnis saepe rerum voluptatum? Suscipit eaque quidem quaerat quae
          accusantium laborum dignissimos placeat! Rerum ex, quas ipsum vero
          quod aspernatur voluptate officia labore asperiores, quo animi
          perspiciatis error porro ea, repudiandae consequuntur eum vitae minima
          voluptatibus! Sint, consequatur minima deserunt adipisci repudiandae
          fuga laborum quo corrupti neque! Alias non temporibus harum ex
          quibusdam numquam nulla voluptate ab magni, esse officia facilis quam
          repudiandae accusantium incidunt architecto omnis nesciunt quidem
          voluptatibus, unde ratione obcaecati sequi laborum. Voluptatum
          obcaecati veniam deleniti. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Magni maxime tempora rem tempore, expedita nisi,
          reprehenderit deserunt sit perspiciatis, illum magnam omnis saepe
          rerum voluptatum? Suscipit eaque quidem quaerat quae accusantium
          laborum dignissimos placeat! Rerum ex, quas ipsum vero quod aspernatur
          voluptate officia labore asperiores, quo animi perspiciatis error
          porro ea, repudiandae consequuntur eum vitae minima voluptatibus!
          Sint, consequatur minima deserunt adipisci repudiandae fuga laborum
          quo corrupti neque! Alias non temporibus harum ex quibusdam numquam
          nulla voluptate ab magni, esse officia facilis quam repudiandae
          accusantium incidunt architecto omnis nesciunt quidem voluptatibus,
          unde ratione obcaecati sequi laborum. Voluptatum obcaecati veniam
          deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni maxime tempora rem tempore, expedita nisi, reprehenderit
          deserunt sit perspiciatis, illum magnam omnis saepe rerum voluptatum?
          Suscipit eaque quidem quaerat quae accusantium laborum dignissimos
          placeat! Rerum ex, quas ipsum vero quod aspernatur voluptate officia
          labore asperiores, quo animi perspiciatis error porro ea, repudiandae
          consequuntur eum vitae minima voluptatibus! Sint, consequatur minima
          deserunt adipisci repudiandae fuga laborum quo corrupti neque! Alias
          non temporibus harum ex quibusdam numquam nulla voluptate ab magni,
          esse officia facilis quam repudiandae accusantium incidunt architecto
          omnis nesciunt quidem voluptatibus, unde ratione obcaecati sequi
          laborum. Voluptatum obcaecati veniam deleniti. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Magni maxime tempora rem tempore,
          expedita nisi, reprehenderit deserunt sit perspiciatis, illum magnam
          omnis saepe rerum voluptatum? Suscipit eaque quidem quaerat quae
          accusantium laborum dignissimos placeat! Rerum ex, quas ipsum vero
          quod aspernatur voluptate officia labore asperiores, quo animi
          perspiciatis error porro ea, repudiandae consequuntur eum vitae minima
          voluptatibus! Sint, consequatur minima deserunt adipisci repudiandae
          fuga laborum quo corrupti neque! Alias non temporibus harum ex
          quibusdam numquam nulla voluptate ab magni, esse officia facilis quam
          repudiandae accusantium incidunt architecto omnis nesciunt quidem
          voluptatibus, unde ratione obcaecati sequi laborum. Voluptatum
          obcaecati veniam deleniti. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Magni maxime tempora rem tempore, expedita nisi,
          reprehenderit deserunt sit perspiciatis, illum magnam omnis saepe
          rerum voluptatum? Suscipit eaque quidem quaerat quae accusantium
          laborum dignissimos placeat! Rerum ex, quas ipsum vero quod aspernatur
          voluptate officia labore asperiores, quo animi perspiciatis error
          porro ea, repudiandae consequuntur eum vitae minima voluptatibus!
          Sint, consequatur minima deserunt adipisci repudiandae fuga laborum
          quo corrupti neque! Alias non temporibus harum ex quibusdam numquam
          nulla voluptate ab magni, esse officia facilis quam repudiandae
          accusantium incidunt architecto omnis nesciunt quidem voluptatibus,
          unde ratione obcaecati sequi laborum. Voluptatum obcaecati veniam
          deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni maxime tempora rem tempore, expedita nisi, reprehenderit
          deserunt sit perspiciatis, illum magnam omnis saepe rerum voluptatum?
          Suscipit eaque quidem quaerat quae accusantium laborum dignissimos
          placeat! Rerum ex, quas ipsum vero quod aspernatur voluptate officia
          labore asperiores, quo animi perspiciatis error porro ea, repudiandae
          consequuntur eum vitae minima voluptatibus! Sint, consequatur minima
          deserunt adipisci repudiandae fuga laborum quo corrupti neque! Alias
          non temporibus harum ex quibusdam numquam nulla voluptate ab magni,
          esse officia facilis quam repudiandae accusantium incidunt architecto
          omnis nesciunt quidem voluptatibus, unde ratione obcaecati sequi
          laborum. Voluptatum obcaecati veniam deleniti. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Magni maxime tempora rem tempore,
          expedita nisi, reprehenderit deserunt sit perspiciatis, illum magnam
          omnis saepe rerum voluptatum? Suscipit eaque quidem quaerat quae
          accusantium laborum dignissimos placeat! Rerum ex, quas ipsum vero
          quod aspernatur voluptate officia labore asperiores, quo animi
          perspiciatis error porro ea, repudiandae consequuntur eum vitae minima
          voluptatibus! Sint, consequatur minima deserunt adipisci repudiandae
          fuga laborum quo corrupti neque! Alias non temporibus harum ex
          quibusdam numquam nulla voluptate ab magni, esse officia facilis quam
          repudiandae accusantium incidunt architecto omnis nesciunt quidem
          voluptatibus, unde ratione obcaecati sequi laborum. Voluptatum
          obcaecati veniam deleniti.
        </p>
      </section>
    </div>
  );
}

export default HomePage;

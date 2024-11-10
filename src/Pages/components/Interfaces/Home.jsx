import HomeStyle from "../componentsStyle/home.module.css";
export default function Home() {
  return (
    <div >
      <div className={HomeStyle.par}>
        <h1>
          <span>W</span>elcome to Your <span> Digital Notebook</span>
        </h1>
        <p>
          Keep your ideas, thoughts, and important notes organized in one place.
          <span>Ur Notes</span> is your go-to platform for capturing and
          managing everything you need in a fast and accessible way. Whether its
          for school, work, or personal projects, we ve got you covered!
        </p>
      </div>
      <div className={HomeStyle.Card}>
        <div className={HomeStyle.page} style={{minHeight:"250px"}}>
          <span>All Your Notes in One Place</span>
          <div className={HomeStyle.margin}></div>
          <p>
            Say goodbye to scattered notes and lost ideas! Ur Notes lets you
            organize everything in one place, so you can easily find and revisit
            your thoughts whenever you need them. Simple, efficient, and always
            at your fingertips
          </p>
        </div>
        <div className={HomeStyle.page} >
          <span>Effortless Organization</span>
          <div className={HomeStyle.margin}></div>
          <p>
            Organizing your notes has never been easier. With categories, tags,
            and search options, Ur Notes helps you stay on top of all your
            important ideas, tasks, and to-dos without any hassle
          </p>
        </div>
        <div className={HomeStyle.page}>
          <span>Access Anywhere, Anytime</span>
          <div className={HomeStyle.margin}></div>
          <p>
            Whether you re on your phone, laptop, or tablet, Ur Notes is
            available wherever you are. Capture inspiration on the go or review
            your notes from the comfort of your home—no boundaries, just
            productivity
          </p>
        </div>
        <div className={HomeStyle.page}>
          <span>Your Notes, Your Style</span>
          <div className={HomeStyle.margin}></div>
          <p>
            Customize your notes the way you want. Add colors, formatting, and
            images to make your notes more visually appealing and personalized.
            Ur Notes adapts to your workflow and style
          </p>
        </div>
        <div className={HomeStyle.page}>
          <span>Secure and Private</span>
          <div className={HomeStyle.margin}></div>
          <p>
            We take your privacy seriously. Ur Notes ensures that all your data
            is securely encrypted and protected, so you can focus on your
            creativity and productivity without any worries
          </p>
        </div>
        <div className={HomeStyle.page}>
          <span>Boost Your Productivity</span>
          <div className={HomeStyle.margin}></div>
          <p>
            With Ur Notes, staying productive is easier than ever. Set
            reminders, create to-do lists, and track your progress with features
            designed to help you achieve your goals faster and more efficiently
          </p>
        </div>
      </div>
    </div>
  );
}

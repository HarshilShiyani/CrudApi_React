import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div class="container mt-3">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div class="row">
          <div class="column">
            <img
              src="data:image/jpeg;base64,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"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div class="column">
            <form action="/action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              ></input>
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              ></input>
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

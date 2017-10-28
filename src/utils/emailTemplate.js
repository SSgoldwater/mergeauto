export default (formData) => {
  const _lifestyles = formData.lookingFor.lifestyles ?
    formData.lookingFor.lifestyles.join(`, `) : ``;

  const _features = formData.lookingFor.features ?
    formData.lookingFor.features.join(`, `) : ``;

  const _contactTimes = formData.contactInfo.availableTimes ?
    formData.contactInfo.availableTimes.join(`, `) : ``;

  return `
    <h1>Used Car Broker Request</h1>
    <h3>Budget<h3>
    <p>${formData.lookingFor.price}</p>
    <h3>Lifestyles</h3>
    <p>${_lifestyles}</p>
    <h3>Features</h3>
    <p>${_features}</p>
    <h3>Details</h3>
    <p>${formData.details.details}</p>
    <h3>Contact Info</h3>
    <p>${formData.contactInfo.name}</p>
    <p>Phone: ${formData.contactInfo.phoneChecked}</p>
    <p>Phone Number: ${formData.contactInfo.phoneTextField}</p>
    <p>Email: ${formData.contactInfo.emailChecked}</p>
    <p>Email: ${formData.contactInfo.emailTextField}</p>
    <h3>Contact Times:</h3>
    <p>${_contactTimes}</p>
  `;
}

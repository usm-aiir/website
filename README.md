## USM AIIR Home Website
Welcome to the the USM AIIR Lab!

This repo hosts the source code for our primary webpage. This website serves as a way to feature our work and our team members, past & present. 

### Getting Started
If you've just joined the lab, you'll need to add yourself to our current-students section. You can do so by simply adding a JSON object in the `data/people/students.json` file. 

In addition, we ask that you upload an image of yourself to `public/images/students`. Please use the naming convention `firstnameLastname.jpg` for your image file, and include this image path in your JSON object.

### For the director
When updating the website, simply clone the repository from the Lab's GitHub organization. After doing so, run the following in the root directory...

1. `npm install`
2. `npm run build`

The updated website will then be served.
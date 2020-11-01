const apiKey = 'ZyPAYE3ZxcB6eWBOFE84qYDF027HKeiN7PTm5J7oZdOAWBOdL1fu1yAPL73JTGwt_V9VBrG2cnysFX3a7ihbtrKR3LvqiVMwbI1wiUNCDB4s4yD0L7ePphyF35iaX3Yx'; 

/* const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
        if (response.ok) {
            return response.json();
        } 
        throw new Error('REQUEST FAILED!!!!');
        
    }).then (jsonResponse => {
            if (jsonResponse.businesses) {
               return jsonResponse.businesses.map(((business) => {
                   console.log(business);
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
               }}));
            }
        })
    }
}
*/
const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
            console.log(jsonResponse.businesses);
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
export default Yelp;
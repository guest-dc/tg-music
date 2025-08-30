export async function GET() {
     const clientId = process.env.SPOTIFY_CLIENT_ID;
     const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
     const artistId = process.env.SPOTIFY_ARTIST_ID;
   
     if (!clientId || !clientSecret || !artistId) {
       return new Response(JSON.stringify({ error: "Missing env variables" }), { status: 500 });
     }
   
     // Get Spotify access token
     const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
       },
       body: 'grant_type=client_credentials',
     });
   
     const tokenData = await tokenRes.json();
   
     if (!tokenData.access_token) {
       return new Response(JSON.stringify({ error: "Failed to get access token" }), { status: 500 });
     }
   
     // Fetch artist top tracks
     const tracksRes = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
       headers: {
         Authorization: `Bearer ${tokenData.access_token}`,
       },
     });
   
     const tracksData = await tracksRes.json();
   
     return new Response(JSON.stringify(tracksData), { status: 200 });
   }
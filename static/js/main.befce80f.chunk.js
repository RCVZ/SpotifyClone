(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(27).concat([function(e,t,a){e.exports=a(107)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(24),o=a.n(s),i=a(5),l=a(6),u=a(8),p=a(7),m=a(9),f=(a(32),a(34),a(40)),h=a(15),d=a(20),y=a(2),v=a.n(y),k=a(11),b={getAccesToken:function(){if("undefined"!==typeof n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout(function(){return n=""},1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("e81c1af21c5a439ab6ebc0a235cb6ad7","&redirect_uri=https://rcvz.github.io/SpotifyClone/&scope=playlist-modify-public%20playlist-modify-private%20streaming%20user-read-birthdate%20user-read-email%20user-read-private%20user-read-currently-playing%20user-read-playback-state&response_type=token");window.location=r},getUserId:function(){var e=Object(k.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.getAccesToken(),a={Authorization:"Bearer ".concat(t)},n="",e.prev=3,e.next=6,fetch("https://api.spotify.com/v1/me",{headers:a});case 6:if(!(r=e.sent).ok){e.next=13;break}return e.next=10,r.json();case 10:return c=e.sent,n=c.id,e.abrupt("return",n);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}},e,this,[[3,15]])}));return function(){return e.apply(this,arguments)}}(),searchPlaylists:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n,r,c,s,o,i=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:0,n=i.length>2&&void 0!==i[2]?i[2]:50,e.next=4,b.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=playlist&limit=").concat(n,"&offset=").concat(a),{headers:c});case 9:if(!(s=e.sent).ok){e.next=17;break}return e.next=13,s.json();case 13:return o=e.sent,e.abrupt("return",o.playlists.items);case 17:return e.abrupt("return",[]);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),console.log(e.t0);case 23:case"end":return e.stop()}},e,this,[[6,20]])}));return function(t){return e.apply(this,arguments)}}(),searchArtists:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n,r,c,s,o,i=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:0,n=i.length>2&&void 0!==i[2]?i[2]:50,e.next=4,b.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=artist&limit=").concat(n,"&offset=").concat(a),{headers:c});case 9:if(!(s=e.sent).ok){e.next=17;break}return e.next=13,s.json();case 13:return o=e.sent,e.abrupt("return",o.artists.items);case 17:return e.abrupt("return",[]);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),console.log(e.t0);case 23:case"end":return e.stop()}},e,this,[[6,20]])}));return function(t){return e.apply(this,arguments)}}(),searchAlbums:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n,r,c,s,o,i=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:0,n=i.length>2&&void 0!==i[2]?i[2]:50,e.next=4,b.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=album&limit=").concat(n,"&offset=").concat(a),{headers:c});case 9:if(!(s=e.sent).ok){e.next=17;break}return e.next=13,s.json();case 13:return o=e.sent,e.abrupt("return",o.albums.items);case 17:return e.abrupt("return",[]);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),console.log(e.t0);case 23:case"end":return e.stop()}},e,this,[[6,20]])}));return function(t){return e.apply(this,arguments)}}(),searchTracks:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n,r,c,s,o,i,l=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:0,n=l.length>2&&void 0!==l[2]?l[2]:50,e.next=4,b.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},s="https://api.spotify.com/v1/search?q=".concat(t,"&type=track&limit=").concat(n,"&offset=").concat(a),e.prev=7,e.next=10,fetch(s,{headers:c});case 10:if(!(o=e.sent).ok){e.next=18;break}return e.next=14,o.json();case 14:return i=e.sent,e.abrupt("return",i.tracks.items);case 18:return e.abrupt("return",[]);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log(e.t0);case 24:case"end":return e.stop()}},e,this,[[7,21]])}));return function(t){return e.apply(this,arguments)}}(),fullSearch:function(){var e=Object(k.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.searchPlaylists(t);case 2:return e.t0=e.sent,e.next=5,b.searchArtists(t);case 5:return e.t1=e.sent,e.next=8,b.searchAlbums(t);case 8:return e.t2=e.sent,e.next=11,b.searchTracks(t);case 11:return e.t3=e.sent,a={playlists:e.t0,artists:e.t1,albums:e.t2,tracks:e.t3},e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),nextResults:function(){var e=Object(k.a)(v.a.mark(function e(t,a,n){var r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=50,"playlists"!==n){e.next=7;break}return e.next=4,b.searchPlaylists(t,a,r);case 4:return e.abrupt("return",e.sent);case 7:if("artist"!==n){e.next=13;break}return e.next=10,b.searchArtists(t,a,r);case 10:return e.abrupt("return",e.sent);case 13:if("albums"!==n){e.next=19;break}return e.next=16,b.searchAlbums(t,a,r);case 16:return e.abrupt("return",e.sent);case 19:if("tracks"!==n){e.next=23;break}return e.next=22,b.searchTracks(t,a,r);case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),sendPlayList:function(){var e=Object(k.a)(v.a.mark(function e(t,a){var n,r,c,s,o,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAccesToken();case 2:return n=e.sent,e.next=5,b.getUserId();case 5:return r=e.sent,c={Authorization:"Bearer ".concat(n)},e.prev=7,e.next=10,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{method:"POST",headers:c,body:JSON.stringify({name:t})});case 10:if(!(s=e.sent).ok){e.next=27;break}return e.next=14,s.json();case 14:return o=e.sent,i=o.id,e.prev=16,e.next=19,fetch("https://api.spotify.com/v1/playlists/".concat(i,"/tracks"),{headers:c,method:"POST",body:JSON.stringify({uris:a})});case 19:if(!e.sent.ok){e.next=22;break}return e.abrupt("return");case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(16),console.log(e.t0);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(7),console.log(e.t1);case 32:case"end":return e.stop()}},e,this,[[7,29],[16,24]])}));return function(t,a){return e.apply(this,arguments)}}(),transferPlaybackHere:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAccesToken();case 2:a=e.sent,n={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},fetch("https://api.spotify.com/v1/me/player",{method:"PUT",headers:n,body:JSON.stringify({device_ids:[t],play:!0})});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPlaylist:function(){var e=Object(k.a)(v.a.mark(function e(){var t,a,n,r,c,s,o,i=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",a=i.length>1&&void 0!==i[1]?i[1]:"user",e.next=4,b.getAccesToken();case 4:return n=e.sent,r={Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},c={user:"https://api.spotify.com/v1/me/playlists",spotify:"https://api.spotify.com/v1/playlists/".concat(t,"/tracks"),spotifyAlbum:"https://api.spotify.com/v1/albums/".concat(t,"/tracks"),spotifyArtist:"https://api.spotify.com/v1/artists/".concat(t,"/top-tracks?country=NL")},e.prev=7,e.next=10,fetch(c[a],{headers:r});case 10:if(!(s=e.sent).ok){e.next=18;break}return e.next=14,s.json();case 14:if(void 0!==(o=e.sent).items){e.next=17;break}return e.abrupt("return",o.tracks);case 17:return e.abrupt("return",o.items);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0);case 23:case"end":return e.stop()}},e,this,[[7,20]])}));return function(){return e.apply(this,arguments)}}(),playTrack:function(){var e=Object(k.a)(v.a.mark(function e(){var t,a,n,r,c,s,o,i,l=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,a=l.length>1&&void 0!==l[1]?l[1]:[""],n=l.length>2&&void 0!==l[2]?l[2]:"track",r=b.getAccesToken(),c={Authorization:"Bearer ".concat(r)},s="playlist"===n||"album"===n||"artist"===n?{context_uri:a,offset:{position:t}}:{uris:a,offset:{uri:t}},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:c,body:JSON.stringify(s)});case 9:if(!(o=e.sent).ok){e.next=15;break}return e.next=13,o.json();case 13:i=e.sent,console.log(i);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[6,17]])}));return function(){return e.apply(this,arguments)}}(),browserSpotify:function(){var e=Object(k.a)(v.a.mark(function e(){var t,a,n,r,c,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAccesToken();case 2:return t=e.sent,a={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},e.prev=4,e.next=7,fetch("https://api.spotify.com/v1/browse/categories?&limit=50",{headers:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,c=r.categories.items,s=c.map(function(e){return e.images=e.icons,e}),e.abrupt("return",s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[4,17]])}));return function(){return e.apply(this,arguments)}}(),fetchSpotify:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAccesToken();case 2:return a=e.sent,n={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},e.prev=4,e.next=7,fetch(t,{headers:n});case 7:if(!(r=e.sent).ok){e.next=13;break}return e.next=11,r.json();case 11:c=e.sent,console.log(c);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}},e,this,[[4,15]])}));return function(t){return e.apply(this,arguments)}}(),getCategoriePlaylist:function(){var e=Object(k.a)(v.a.mark(function e(t){var a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAccesToken();case 2:return a=e.sent,n={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},e.prev=4,e.next=7,fetch("https://api.spotify.com/v1/browse/categories/".concat(t,"/playlists?&limit=50"),{headers:n});case 7:if(!(r=e.sent).ok){e.next=13;break}return e.next=11,r.json();case 11:return c=e.sent,e.abrupt("return",c.playlists.items);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}},e,this,[[4,15]])}));return function(t){return e.apply(this,arguments)}}()},g=b,E=Object(r.createContext)(),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateState=function(e,t){a.setState(Object(d.a)({},e,t))},a.searchSpotify=function(e){g.fullSearch(e).then(function(t){var n=t.playlists,r=t.artists,c=t.albums,s=t.tracks;a.tracks=s,a.setState({searchTerm:e,playlists:n,artists:r,albums:c,tracks:s})})},a.searchMore=function(e,t){a.setState(function(a){return Object(d.a)({},t,[].concat(Object(h.a)(a[t]),Object(h.a)(e)))})},a.addToNewPlaylist=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"track";arguments.length>2&&void 0!==arguments[2]&&arguments[2];a.setState(function(a){var n=a.newPlaylist.filter(function(t){return t.id!==e.id});return{newPlaylist:[].concat(Object(h.a)(n),"track"===t?[e]:Object(h.a)(e))}})},a.addToCurrentPlaylist=function(e){a.setState({currentPlaylist:e})},a.deleteTrack=function(e){var t=a.state.newPlaylist.filter(function(t){return t.id!==e.id});a.setState({newPlaylist:t})},a.state={searchTerm:"",playlists:[],artists:[],albums:[],tracks:[],newPlaylist:[],currentPlaylist:[],addToNewPlaylist:a.addToNewPlaylist,addToCurrentPlaylist:a.addToCurrentPlaylist,deleteTrack:a.deleteTrack,updateState:a.updateState,searchSpotify:a.searchSpotify,searchMore:a.searchMore},a.scrollHeight=200,a.offset=50,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){g.getAccesToken()}},{key:"render",value:function(){return c.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(r.Component),T=a(3),x=a(4),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSearchTerm=function(e){var t=e.target.value;a.context.updateState("searchTerm",t),clearTimeout(a.delay),a.delay=setTimeout(a.search(t),16.7)},a.search=function(e){a.context.searchSpotify(e),e.length<=0?a.props.history.push("/search/no-results"):a.props.history.push("/search?q=".concat(e))},a.delay=null,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{onChange:this.handleSearchTerm,placeholder:"Enter A Song, Album, or Artist"}),c.a.createElement(f.a,{to:"/search"},c.a.createElement("button",{type:"submit",onClick:this.submitSearch,name:"SEARCH"},c.a.createElement(T.a,{className:"Search_Button",icon:x.k}))))}}]),t}(r.PureComponent);O.contextType=E;var j=O,w=(a(41),a(108)),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Navigation-wrapper"},c.a.createElement("div",{className:"Navigation"},c.a.createElement(w.a,{className:"Menu-Button",to:"/search/no-results"},c.a.createElement(T.a,{icon:x.k}),c.a.createElement("span",null,"Search")),c.a.createElement(w.a,{className:"Menu-Button",to:"/currentPlaylist"},c.a.createElement(T.a,{icon:x.a}),c.a.createElement("span",null,"Current "),c.a.createElement("span",null," Playlist ")),c.a.createElement(w.a,{className:"Menu-Button",to:"/newPlaylist"},c.a.createElement(T.a,{icon:x.j}),c.a.createElement("span",null,"New "),c.a.createElement("span",null," Playlist ")),c.a.createElement(w.a,{className:"Menu-Button",to:"/library"},c.a.createElement(T.a,{icon:x.l}),c.a.createElement("span",null,"Library")),c.a.createElement(w.a,{className:"Menu-Button",to:"/userPlaylists"},c.a.createElement(T.a,{icon:x.e}),c.a.createElement("span",null,"Playlists"))))}}]),t}(r.Component),C=(a(45),a(47),a(12)),S=(a(49),a(51),function(e){var t=e.name,a=e.artist,n=e.textSize,r=e.overfl,s=e.shadow;return c.a.createElement("div",{className:"Text"},c.a.createElement("p",{style:{fontSize:n,overflow:r,textShadow:s}},t),c.a.createElement("p",{style:{fontSize:n,overflow:r,textShadow:s}},a))}),A=(a(53),function(e){var t=e.ms;return c.a.createElement("div",{className:"Time"},function(e){var t,a,n;return a=Math.floor(e/1e3),t=Math.floor(a/60),n="0".concat(a%=60).slice(-2),"".concat(t,":").concat(n)}(t))}),B=(a(55),a(57),function(e){var t=e.onPlayClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"play-pause",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.h,size:"lg"})))}),M=(a(59),function(e){var t=e.onAdd;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"AddButton",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.i,size:"lg"})))}),z=(a(61),function(e){var t=e.onDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"DeleteButton",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.f,size:"lg"})))}),L=function(e){var t=e.onOpen;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"AddButton",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.c,size:"lg"})))},_=function(e){var t=e.onOpen;return c.a.createElement("div",{className:"Action-Overlay"},c.a.createElement(L,{onOpen:t}))},I=function(e){var t,a=e.trackAction,n=e.onPlayClick,r=e.inPlaylist,s=e.playlistType,o=e.clickOnOverlay;return t="artist"===s?"Action-Overlay artist":"Action-Overlay",c.a.createElement("div",{className:t,onClick:o},r?c.a.createElement(z,{onDelete:a}):c.a.createElement(M,{onAdd:a}),c.a.createElement(B,{onPlayClick:n}))},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handlePlay=function(e){var t=a.props.getUrisList(),n=Object(C.a)(t,2),r=n[0],c=n[1];g.playTrack(a.props.track.uri,r),a.context.addToCurrentPlaylist(c)},a.handleTrackAction=function(e){a.props.trackAction(a.props.track)},a.getPosition=function(){var e=a.props.index;return e%2===0?{top:50*e,left:0}:{top:50*(e-1),right:0}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.track,t=e.artists,a=e.name,n=e.album,r=e.duration_ms;return c.a.createElement("div",{className:"Track",style:this.getPosition()},c.a.createElement("div",{className:"Track-information"},c.a.createElement("div",{className:"Album-img"},n.images[2]?c.a.createElement("img",{className:"shadow",src:n.images[2].url,alt:"album"}):null),c.a.createElement("div",{className:"Track-name"},c.a.createElement(S,{name:a,artist:t[0].name,shadow:"0 15px 40px 1px rgba(0,0,0,0.30)"})),c.a.createElement(A,{className:"shadow",ms:r})),c.a.createElement(I,{trackAction:this.handleTrackAction,onPlayClick:this.handlePlay,inPlaylist:this.props.inPlaylist}))}}]),t}(r.PureComponent);F.contextType=E;var H=F,U=function(e){var t=e.trackAction,a=e.inPlaylist,n=e.tracklist,r=e.start,s=e.end,o=function(){var e=[];return n.map(function(t){return e.push(t.uri)}),[e,n]};return c.a.createElement(c.a.Fragment,null,n.map(function(e,n){if(n>=r&&n<=s)return c.a.createElement(H,{index:n,track:e,key:e.id,trackAction:t,inPlaylist:a,getUrisList:o})}))},V=(a(63),function(e){var t=e.type,a=e.buttonAction,n=e.name;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"Button",type:t,onClick:a},n))}),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).savePlayList=function(){var e=a.context.newPlaylist,t=a.state.playlistName;if(e.length>0&&t.length>0){var n=e.map(function(e){return e.uri});g.sendPlayList(t,n)}},a.handleChange=function(e){a.setState({playlistName:e.target.value})},a.state={playlistName:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.context,t=e.newPlaylist,a=e.deleteTrack;return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{onChange:this.handleChange,placeholder:"Playlist"}),c.a.createElement(U,{tracklist:t,trackAction:a,inPlaylist:!0}),c.a.createElement(V,{type:"submit",buttonAction:this.savePlayList,name:"SAVE TO SPOTIFY"}))}}]),t}(r.PureComponent);D.contextType=E;var W=D,J=(a(65),function(){var e=Object(r.useContext)(E);return c.a.createElement(U,{tracklist:e.currentPlaylist})}),q=(a(67),a(69),a(71),function(e){var t=e.children;return c.a.createElement("div",{className:"Grid"},t)}),R=(a(73),a(75),a(77),function(e){var t=e.children;return c.a.createElement("div",{className:"Title"},t)}),G=(a(79),function(){return c.a.createElement("div",{className:"Border"})}),Q=function(e){var t=e.children,a=e.buttonAction,n=e.name;return c.a.createElement("div",{className:"Header"},c.a.createElement(R,null,t),c.a.createElement(V,{type:"button",buttonAction:a,name:n}),c.a.createElement(G,null))},Y=function(e){var t=e.history,a=Object(r.useContext)(E),n=Object(r.useState)(!1),s=Object(C.a)(n,2),o=s[0],i=s[1],l=Object(r.useState)({scrollTopPosition:100,start:0,end:5}),u=Object(C.a)(l,2),p=u[0],m=u[1];return c.a.createElement("div",{className:"ResultsTracklist"},c.a.createElement(Q,{name:o?"Less":"More",buttonAction:function(){"/search/tracks"===t.location.pathname?(t.push("/search"),i(!1),m({scrollTopPosition:100,start:0,end:5})):(t.push("/search/tracks"),i(!0),m({scrollTopPosition:100,start:0,end:18}))}},"Tracks"),c.a.createElement("div",{className:"viewport",onScroll:function(e){o&&(e.target.scrollTop>=p.scrollTopPosition?m({scrollTopPosition:p.scrollTopPosition+100,start:p.start+2,end:p.end+2}):e.target.scrollTop+100<=p.scrollTopPosition&&m({scrollTopPosition:p.scrollTopPosition-100,start:p.start-2,end:p.end-2}))},style:{height:o?"650px":"350px"}},c.a.createElement("div",{className:"list",style:{height:o?50*a.tracks.length:"350px"}},c.a.createElement(U,{trackAction:a.addToNewPlaylist,tracklist:a.tracks,start:p.start,end:p.end}))))},$=(a(81),a(83),a(85),function(e){var t=e.playlist,a=e.openTracks,n=e.addToNewPlaylist,r=e.addToCurrentPlaylist;return c.a.createElement("div",{className:"Card ".concat(t.type)},c.a.createElement("div",{className:"Card-Img ".concat(t.type)},t.images[0]?c.a.createElement("img",{src:t.images[0].url,alt:"img"}):""),c.a.createElement(S,{name:t.name}),void 0!==t.type?c.a.createElement(I,{trackAction:function(){n(t.id,t)},playlistType:t.type,onPlayClick:function(){var e;t.uri.includes("user")?(t.uri.split(":").splice(1,2).join(":"),e=t.uri):e=t.uri.split(":").slice(2).join(":"),g.playTrack("1",e,t.type),r(t.id,t)},clickOnOverlay:function(e){"Action-Overlay"===e.target.className&&a(t.id,t)}}):c.a.createElement(_,{onOpen:function(){return a(t.id,t)}}))}),K=function(e){var t=e.playlists,a=e.openTracks,n=e.addToNewPlaylist,r=e.addToCurrentPlaylist;return c.a.createElement("div",{className:"PlaylistDisplay"},t.map(function(e){return c.a.createElement($,{addToCurrentPlaylist:r,addToNewPlaylist:n,playlist:e,id:e.id,key:e.id,openTracks:a})}))},X=function(e){var t=e.history,a=Object(r.useContext)(E),n=Object(r.useState)(function(){return{expanded:!1,state:"More",results:3}}),s=Object(C.a)(n,2),o=s[0],i=s[1];Object(r.useEffect)(function(){"/search"===t.location.pathname?i({expanded:!1,state:"More",results:3}):i({expanded:!0,state:"Less",results:1/0})},[t.location.pathname]);var l=function(e,t){var a=t.images,n=[];return g.getPlaylist(e,"spotifyAlbum").then(function(e){return e.map(function(e){return e.album={images:a},n.push(e)}),n})};return c.a.createElement("div",{className:"Albumslist"},c.a.createElement(Q,{name:o.state,buttonAction:function(){"/search/albums"===t.location.pathname?t.push("/search"):t.push("/search/albums")}},"Albums"),c.a.createElement(K,{playlists:a.albums.slice(0,o.results),addToCurrentPlaylist:function(e,t){l(e,t).then(function(e){a.addToCurrentPlaylist(e,"tracklist")})},addToNewPlaylist:function(e,t){l(e,t).then(function(e){a.addToNewPlaylist(e,"tracklist")})},openTracks:function(e,n){l(e,n).then(function(e){a.updateState("tracks",e),t.push("/search/tracks")})}}))},Z=(a(87),function(e){var t=e.history,a=Object(r.useContext)(E),n=Object(r.useState)(function(){return{expanded:!1,state:"More",results:3}}),s=Object(C.a)(n,2),o=s[0],i=s[1];Object(r.useEffect)(function(){"/search"===t.location.pathname?i({expanded:!1,state:"More",results:3}):i({expanded:!0,state:"Less",results:1/0})},[t.location.pathname]);var l=function(e,t){return g.getPlaylist(e,"spotifyArtist").then(function(e){return e})};return c.a.createElement("div",{className:"Artists"},c.a.createElement(Q,{name:o.state,buttonAction:function(){"/search/artists"===t.location.pathname?t.push("/search"):t.push("/search/artists")},artists:!0},"Artists"),c.a.createElement(K,{playlists:a.artists.slice(0,o.results),addToCurrentPlaylist:function(e,t){l(e).then(function(e){a.addToCurrentPlaylist(e,"tracklist")})},addToNewPlaylist:function(e,t){l(e).then(function(e){a.addToNewPlaylist(e,"tracklist")})},openTracks:function(e,n){l(e).then(function(e){a.updateState("tracks",e),t.push("/search/tracks")})}}))}),ee=(a(89),function(e){var t=e.history,a=Object(r.useContext)(E),n=Object(r.useState)(function(){return{expanded:!1,state:"More",results:6}}),s=Object(C.a)(n,2),o=s[0],i=s[1];Object(r.useEffect)(function(){"/search"===t.location.pathname?i({expanded:!1,state:"More",results:6}):i({expanded:!0,state:"Less",results:1/0})},[t.location.pathname]);var l=function(e,t){var a=[];return g.getPlaylist(e,"spotify").then(function(e){return e.map(function(e){return a.push(e.track)}),a})};return c.a.createElement("div",{className:"Playlists"},c.a.createElement(Q,{name:o.state,buttonAction:function(){"/search/playlists"===t.location.pathname?t.push("/search"):t.push("/search/playlists")}},"Playlists"),c.a.createElement(K,{playlists:a.playlists.slice(0,o.results),addToCurrentPlaylist:function(e,t){l(e).then(function(e){a.addToCurrentPlaylist(e,"tracklist")})},addToNewPlaylist:function(e,t){l(e).then(function(e){a.addToNewPlaylist(e,"tracklist")})},openTracks:function(e,n){l(e).then(function(e){a.updateState("tracks",e),t.push("/search/tracks")})}}))}),te=a(110),ae=a(43),ne=function(){return c.a.createElement(q,null,c.a.createElement(te.a,null,c.a.createElement(ae.a,{exact:!0,path:"/search",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ee,Object.assign({key:1},e)),c.a.createElement(Y,Object.assign({key:2},e)),c.a.createElement(X,Object.assign({key:3},e)),c.a.createElement(Z,Object.assign({key:4},e)))}}),c.a.createElement(ae.a,{path:"/search/no-results",render:function(){return c.a.createElement("h1",{style:{fontSize:"30px",marginTop:"30px"}},"No results")}}),c.a.createElement(ae.a,{path:"/search/playlists",render:function(e){return c.a.createElement(ee,Object.assign({key:1},e))}}),c.a.createElement(ae.a,{path:"/search/tracks",render:function(e){return c.a.createElement(Y,Object.assign({key:2},e))}}),c.a.createElement(ae.a,{path:"/search/albums",render:function(e){return c.a.createElement(X,Object.assign({key:3},e))}}),c.a.createElement(ae.a,{path:"/search/artists",render:function(e){return c.a.createElement(Z,Object.assign({key:4},e))}})))},re=(a(91),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).traverse=function(e){!0===a.state.istrackList?a.props.addToCurrentPlaylist(e):a.setState({playlists:e,istrackList:!0})},a.getPlaylistTracks=function(e,t){var a=[];return g.getPlaylist(e,"spotify").then(function(e){return e.map(function(e){return a.push(e.track)}),a})},a.getCategoriePlaylists=function(e){g.getCategoriePlaylist(e.id).then(function(e){a.setState({playlists:e,istrackList:!0})})},a.openTracks=function(e,t){if(void 0===t.type)return a.getCategoriePlaylists(t);a.getPlaylistTracks(e,t).then(function(e){a.context.updateState("tracks",e),a.props.history.push("/search/tracks")})},a.addToNewPlaylist=function(e,t){a.getPlaylistTracks(e,t).then(function(e){a.context.addToNewPlaylist(e,"tracklist")})},a.addToCurrentPlaylist=function(e,t){a.getPlaylistTracks(e,t).then(function(e){a.context.addToCurrentPlaylist(e,"tracklist")})},a.state={playlists:[],istrackList:!1,results:6},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.browserSpotify().then(function(t){e.setState({playlists:t})})}},{key:"render",value:function(){var e=this.state,t=e.playlists,a=e.istrackList;return c.a.createElement(q,null,c.a.createElement(K,{playlists:t,history:this.props.history,istrackList:a,addToCurrentPlaylist:this.addToCurrentPlaylist,addToNewPlaylist:this.addToNewPlaylist,openTracks:this.openTracks}))}}]),t}(r.PureComponent));re.contextType=E;var ce=re,se=(a(93),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getPlaylistTracks=function(e,t){var a=[];return g.getPlaylist(e,"spotify").then(function(e){return e.map(function(e){return a.push(e.track)}),a})},a.addToNewPlaylist=function(e,t){a.getPlaylistTracks(e,t).then(function(e){a.context.addToNewPlaylist(e,"tracklist")})},a.addToCurrentPlaylist=function(e,t){a.getPlaylistTracks(e,t).then(function(e){a.context.addToCurrentPlaylist(e,"tracklist")})},a.openTracks=function(e,t){a.getPlaylistTracks(e,t).then(function(e){a.context.updateState("tracks",e),a.props.history.push("/search/tracks")})},a.state={userPlaylists:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.getPlaylist().then(function(t){e.setState({userPlaylists:t})})}},{key:"render",value:function(){var e=this.state.userPlaylists;return c.a.createElement(q,null,c.a.createElement(K,{playlists:e,addToCurrentPlaylist:this.addToCurrentPlaylist,addToNewPlaylist:this.addToNewPlaylist,openTracks:this.openTracks}))}}]),t}(r.PureComponent));se.contextType=E;var oe=se,ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadOnScroll=function(e){if(console.log(e.target.scrollTop),a.props.history.location.pathname.startsWith("/search/")){var t=a.context,n=t.searchTerm,r=t.searchMore,c=a.props.location.pathname.split("/")[1],s=a.props.location.pathname.split("/")[2];a.scrollHeight<=e.target.scrollTop&&"search"===c&&(a.scrollHeight+=1200,a.offset+=50,g.nextResults(n,a.offset,s).then(function(e){r(e,s)}))}},a.scrollHeight=600,a.offset=50,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){"/search"===this.props.history.location.pathname&&(this.offset=50,this.scrollHeight=600)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Main",onScroll:this.loadOnScroll},c.a.createElement(te.a,null,c.a.createElement(ae.a,{path:"/search/",render:function(e){return c.a.createElement(ne,e)}}),c.a.createElement(ae.a,{path:"/currentPlaylist",render:function(e){return c.a.createElement(J,e)}}),c.a.createElement(ae.a,{path:"/newPlaylist",render:function(e){return c.a.createElement(W,e)}}),c.a.createElement(ae.a,{path:"/library",render:function(e){return c.a.createElement(ce,e)}}),c.a.createElement(ae.a,{path:"/userPlaylists",render:function(e){return c.a.createElement(oe,e)}})))}}]),t}(r.PureComponent);ie.contextType=E;var le=ie,ue=(a(95),a(97),function(e){var t=e.currentPostion,a=e.sliderAction,n=e.maxValue,r=e.handleMouseUp;return c.a.createElement("div",{className:"Bar-container"},c.a.createElement("input",{className:"Bar",onMouseUp:r,onChange:a,step:"1",type:"range",min:"1",value:t,max:n}),c.a.createElement("div",{className:"progression",style:{width:"".concat(100/n*t,"%")}}))}),pe=function(e){var t=e.onPlayClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"play-pause",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.g,size:"lg"})))},me=(a(99),function(e){var t=e.onForward;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"forward",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.d,size:"sm"})))}),fe=(a(101),function(e){var t=e.onBackward;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"back",onClick:t},c.a.createElement(T.a,{className:"button",icon:x.b,size:"sm"})))}),he=(a(103),function(e){var t=e.togglePlaylist;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"Playlist-Button"},c.a.createElement(T.a,{icon:x.e,onClick:t})))}),de=(a(105),function(e){var t=e.playing,a=e.duration,n=e.player,s=e.basisPostion,o=Object(r.useState)(function(){return s}),i=Object(C.a)(o,2),l=i[0],u=i[1],p=Object(r.useState)(function(){return null}),m=Object(C.a)(p,2),f=m[0],h=m[1],d=Object(r.useCallback)(function(){t&&n.getCurrentState().then(function(e){u(e.position)})},[t]);Object(r.useEffect)(function(){return h(t?setInterval(function(){return d()},500):clearInterval(f)),function(){h(clearInterval(f))}},[t]);return c.a.createElement("div",{className:"Track-Progression"},c.a.createElement(A,{ms:l}),c.a.createElement("div",{className:"Track-Bar"},c.a.createElement(ue,{currentPostion:l,sliderAction:function(e){h(clearInterval(f)),u(e.target.value)},maxValue:a,handleMouseUp:function(e){n.seek(l).then(function(){h(setInterval(function(){return d()},500))})}})),c.a.createElement(A,{ms:a}))}),ye=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).checkForPlayer=function(){var e=a.state.token;null!==window.Spotify&&(clearInterval(a.playerCheckInterval),a.player=new window.Spotify.Player({name:"SpotifyClone",getOAuthToken:function(t){t(e)}}),a.createEventHandlers(),a.player.connect())},a.createEventHandlers=function(){a.player.on("initialization_error",function(e){return console.error(e)}),a.player.on("authentication_error",function(e){return console.error(e)}),a.player.on("account_error",function(e){return console.error(e)}),a.player.on("playback_error",function(e){return console.error(e)}),a.player.on("player_state_changed",function(e){return a.onStateChanged(e)}),a.player.on("ready",function(e){var t=e.device_id;a.setState({deviceId:t}),g.transferPlaybackHere(t)})},a.onStateChanged=function(e){if(null!==e){var t=e.track_window.current_track,n=t.name,r=t.album.name,c=t.artists.map(function(e){return e.name}).join(", "),s=!e.paused,o=t.duration_ms;a.setState({currentTrack:t,duration:o,trackName:n,albumName:r,artistName:c,playing:s}),a.player.getVolume().then(function(e){return a.setState({volume:100*e})})}},a.getPlayerCurrentstate=function(){a.player.getCurrentState().then(function(e){return a.setState({position:e.position})})},a.onPrevClick=function(){a.player.previousTrack()},a.onPlayClick=function(){a.player.togglePlay()},a.onNextClick=function(){a.player.nextTrack()},a.onVolumeClick=function(e){var t=e.target.value;a.player.setVolume(t/100).then(function(){return a.setState({volume:t})})},a.toggleMute=function(e){a.state.mute?(a.player.setVolume(a.state.volume/100),a.setState({mute:!1})):(a.player.setVolume(0),a.setState({mute:!0}))},a.togglePlaylist=function(e){a.setState(function(e){return{showPlaylist:!e.showPlaylist}})},a.state={token:"",deviceId:"",loggedIn:!0,playing:!1,error:"",currentTrack:"",trackName:"",artistName:"",albumName:"",position:0,duration:0,volume:0,mute:!1,showPlaylist:!1},a.playerCheckInterval=null,a.getPlayerStateTimer=null,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({token:g.getAccesToken()}),this.playerCheckInterval=setInterval(function(){return e.checkForPlayer()},800)}},{key:"render",value:function(){var e=this.state,t=e.playing,a=e.currentTrack,n=e.volume,r=e.duration,s=e.position,o=e.artistName,i=e.trackName,l=e.showPlaylist;return c.a.createElement("div",{className:"Player"},c.a.createElement("div",{className:"Track-info"},c.a.createElement(S,{track:a,name:i,artist:o,textSize:"1rem",overfl:"visible"})),c.a.createElement("div",{className:"Control"},c.a.createElement("div",{className:"Player-buttons"},c.a.createElement(fe,{onBackward:this.onPrevClick}),t?c.a.createElement(pe,{onPlayClick:this.onPlayClick}):c.a.createElement(B,{onPlayClick:this.onPlayClick}),c.a.createElement(me,{onForward:this.onNextClick})),c.a.createElement(de,{basisPostion:s,player:this.player,playing:t,duration:r})),c.a.createElement("div",{className:"Control-Leftside"},l?c.a.createElement("div",{className:"Current-Playlist-Container"},c.a.createElement(J,{playlist:this.props.currentPlaylist})):null,c.a.createElement(he,{togglePlaylist:this.togglePlaylist}),c.a.createElement("div",{className:"volume"},c.a.createElement(T.a,{icon:x.m,size:"sm",onClick:this.toggleMute}),c.a.createElement("div",{className:"volume-bar"},c.a.createElement(ue,{currentPostion:n,sliderAction:this.onVolumeClick,maxValue:"100"})))))}}]),t}(r.PureComponent),ve=a(111),ke=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){g.getAccesToken()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,{history:this.props.history,location:this.props.location}),c.a.createElement(N,null),c.a.createElement(le,{history:this.props.history,location:this.props.location},c.a.createElement(J,null),c.a.createElement(W,null),c.a.createElement(ce,null),c.a.createElement(oe,null)),c.a.createElement(ye,null))}}]),t}(r.PureComponent),be=Object(ve.a)(ke),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Pe=a(109);o.a.render(c.a.createElement(Pe.a,null,c.a.createElement(P,null,c.a.createElement(be,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/SpotifyClone",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/SpotifyClone","/service-worker.js");ge?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ee(e)})}}()}]),[[27,2,1]]]);
//# sourceMappingURL=main.befce80f.chunk.js.map
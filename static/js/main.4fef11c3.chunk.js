(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(27).concat([function(e,t,a){e.exports=a(109)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(24),i=a.n(s),o=a(5),l=a(6),u=a(8),p=a(7),m=a(9),h=(a(32),a(34),a(40)),f=a(16),d=a(20),y=a(2),v=a.n(y),b=a(11),k={getAccesToken:function(){if("undefined"!==typeof n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout(function(){return n=""},1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("7234ae8b9cac4739b9af4f2806d43c7c","&redirect_uri=https://rcvz.github.io/SpotifyClone/&scope=playlist-modify-public%20playlist-modify-private%20streaming%20user-read-birthdate%20user-read-email%20user-read-private&response_type=token");window.location=r},getUserId:function(){var e=Object(b.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.getAccesToken(),a={Authorization:"Bearer ".concat(t)},n="",e.prev=3,e.next=6,fetch("https://api.spotify.com/v1/me",{headers:a});case 6:if(!(r=e.sent).ok){e.next=13;break}return e.next=10,r.json();case 10:return c=e.sent,n=c.id,e.abrupt("return",n);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}},e,this,[[3,15]])}));return function(){return e.apply(this,arguments)}}(),searchPlaylists:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c,s,i,o=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:0,n=o.length>2&&void 0!==o[2]?o[2]:50,e.next=4,k.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=playlist&limit=").concat(n,"&offset=").concat(a),{headers:c});case 9:if(!(s=e.sent).ok){e.next=15;break}return e.next=13,s.json();case 13:return i=e.sent,e.abrupt("return",i.playlists.items);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[6,17]])}));return function(t){return e.apply(this,arguments)}}(),searchArtists:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c,s,i,o=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:0,n=o.length>2&&void 0!==o[2]?o[2]:50,e.next=4,k.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=artist&limit=").concat(n,"&offset=").concat(a),{headers:c});case 9:if(!(s=e.sent).ok){e.next=15;break}return e.next=13,s.json();case 13:return i=e.sent,e.abrupt("return",i.artists.items);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[6,17]])}));return function(t){return e.apply(this,arguments)}}(),searchAlbums:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c,s,i,o=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:0,n=o.length>2&&void 0!==o[2]?o[2]:50,e.next=4,k.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},e.prev=6,e.next=9,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=album&limit=").concat(n,"&offset=").concat(a),{headers:c});case 9:if(!(s=e.sent).ok){e.next=15;break}return e.next=13,s.json();case 13:return i=e.sent,e.abrupt("return",i.albums.items);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[6,17]])}));return function(t){return e.apply(this,arguments)}}(),searchTracks:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c,s,i,o,l=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:0,n=l.length>2&&void 0!==l[2]?l[2]:50,e.next=4,k.getAccesToken();case 4:return r=e.sent,c={Authorization:"Bearer ".concat(r)},s="https://api.spotify.com/v1/search?q=".concat(t,"&type=track&limit=").concat(n,"&offset=").concat(a),e.prev=7,e.next=10,fetch(s,{headers:c});case 10:if(!(i=e.sent).ok){e.next=16;break}return e.next=14,i.json();case 14:return o=e.sent,e.abrupt("return",o.tracks.items);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),console.log(e.t0);case 21:case"end":return e.stop()}},e,this,[[7,18]])}));return function(t){return e.apply(this,arguments)}}(),fullSearch:function(){var e=Object(b.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.searchPlaylists(t);case 2:return e.t0=e.sent,e.next=5,k.searchArtists(t);case 5:return e.t1=e.sent,e.next=8,k.searchAlbums(t);case 8:return e.t2=e.sent,e.next=11,k.searchTracks(t);case 11:return e.t3=e.sent,a={playlists:e.t0,artists:e.t1,albums:e.t2,tracks:e.t3},e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),nextResults:function(){var e=Object(b.a)(v.a.mark(function e(t,a,n){var r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=50,"playlists"!==n){e.next=7;break}return e.next=4,k.searchPlaylists(t,a,r);case 4:return e.abrupt("return",e.sent);case 7:if("artist"!==n){e.next=13;break}return e.next=10,k.searchArtists(t,a,r);case 10:return e.abrupt("return",e.sent);case 13:if("albums"!==n){e.next=19;break}return e.next=16,k.searchAlbums(t,a,r);case 16:return e.abrupt("return",e.sent);case 19:if("tracks"!==n){e.next=23;break}return e.next=22,k.searchTracks(t,a,r);case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),sendPlayList:function(){var e=Object(b.a)(v.a.mark(function e(t,a){var n,r,c,s,i,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAccesToken();case 2:return n=e.sent,e.next=5,k.getUserId();case 5:return r=e.sent,c={Authorization:"Bearer ".concat(n)},e.prev=7,e.next=10,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{method:"POST",headers:c,body:JSON.stringify({name:t})});case 10:if(!(s=e.sent).ok){e.next=27;break}return e.next=14,s.json();case 14:return i=e.sent,o=i.id,e.prev=16,e.next=19,fetch("https://api.spotify.com/v1/playlists/".concat(o,"/tracks"),{headers:c,method:"POST",body:JSON.stringify({uris:a})});case 19:if(!e.sent.ok){e.next=22;break}return e.abrupt("return");case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(16),console.log(e.t0);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(7),console.log(e.t1);case 32:case"end":return e.stop()}},e,this,[[7,29],[16,24]])}));return function(t,a){return e.apply(this,arguments)}}(),transferPlaybackHere:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAccesToken();case 2:a=e.sent,n={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},fetch("https://api.spotify.com/v1/me/player",{method:"PUT",headers:n,body:JSON.stringify({device_ids:[t],play:!0})});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPlaylist:function(){var e=Object(b.a)(v.a.mark(function e(){var t,a,n,r,c,s,i,o=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:"user",e.next=4,k.getAccesToken();case 4:return n=e.sent,r={user:"https://api.spotify.com/v1/me/playlists",spotify:"https://api.spotify.com/v1/playlists/".concat(t,"/tracks"),spotifyAlbum:"https://api.spotify.com/v1/albums/".concat(t,"/tracks")},c={Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},e.prev=7,e.next=10,fetch(r[a],{headers:c});case 10:if(!(s=e.sent).ok){e.next=16;break}return e.next=14,s.json();case 14:return i=e.sent,e.abrupt("return",i.items);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),console.log(e.t0);case 21:case"end":return e.stop()}},e,this,[[7,18]])}));return function(){return e.apply(this,arguments)}}(),playTrack:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c,s,i,o,l=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:[""],n=l.length>2&&void 0!==l[2]?l[2]:"track",r=k.getAccesToken(),c={Authorization:"Bearer ".concat(r)},s="playlist"===n||"album"===n||"artist"===n?{context_uri:a,offset:{postion:t}}:{uris:a,offset:{uri:t}},e.prev=5,e.next=8,fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:c,body:JSON.stringify({body:s})});case 8:if(!(i=e.sent).ok){e.next=14;break}return e.next=12,i.json();case 12:o=e.sent,console.log(o);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[5,16]])}));return function(t){return e.apply(this,arguments)}}(),browserSpotify:function(){var e=Object(b.a)(v.a.mark(function e(){var t,a,n,r,c,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAccesToken();case 2:return t=e.sent,a={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},e.prev=4,e.next=7,fetch("https://api.spotify.com/v1/browse/categories?&limit=50",{headers:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,c=r.categories.items,s=c.map(function(e){return e.images=e.icons,e}),e.abrupt("return",s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[4,17]])}));return function(){return e.apply(this,arguments)}}(),fetchSpotify:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAccesToken();case 2:return a=e.sent,n={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},e.prev=4,e.next=7,fetch(t,{headers:n});case 7:if(!(r=e.sent).ok){e.next=13;break}return e.next=11,r.json();case 11:c=e.sent,console.log(c);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}},e,this,[[4,15]])}));return function(t){return e.apply(this,arguments)}}(),getCategoriePlaylist:function(){var e=Object(b.a)(v.a.mark(function e(t){var a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAccesToken();case 2:return a=e.sent,n={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},e.prev=4,e.next=7,fetch("https://api.spotify.com/v1/browse/categories/".concat(t,"/playlists"),{headers:n});case 7:if(!(r=e.sent).ok){e.next=14;break}return e.next=11,r.json();case 11:return c=e.sent,console.log(c),e.abrupt("return",c.playlists.items);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[4,16]])}));return function(t){return e.apply(this,arguments)}}()},g=k,E=Object(r.createContext)(),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateState=function(e,t){a.setState(Object(d.a)({},e,t))},a.searchSpotify=function(e){g.fullSearch(e).then(function(t){var n=t.playlists,r=t.artists,c=t.albums,s=t.tracks;a.tracks=s,a.setState({searchTerm:e,playlists:n,artists:r,albums:c,tracks:s})})},a.searchMore=function(e,t){a.setState(function(a){return Object(d.a)({},t,[].concat(Object(f.a)(a[t]),Object(f.a)(e)))})},a.addToNewPlaylist=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"track";arguments.length>2&&void 0!==arguments[2]&&arguments[2];a.setState(function(a){var n=a.newPlaylist.filter(function(t){return t.id!==e.id});return{newPlaylist:[].concat(Object(f.a)(n),"track"===t?[e]:Object(f.a)(e))}})},a.addToCurrentPlaylist=function(e){a.setState({currentPlaylist:e})},a.deleteTrack=function(e){var t=a.state.newPlaylist.filter(function(t){return t.id!==e.id});a.setState({newPlaylist:t})},a.state={searchTerm:"",playlists:[],artists:[],albums:[],tracks:[],newPlaylist:[],currentPlaylist:[],addToNewPlaylist:a.addToNewPlaylist,addToCurrentPlaylist:a.addToCurrentPlaylist,deleteTrack:a.deleteTrack,updateState:a.updateState,searchSpotify:a.searchSpotify,searchMore:a.searchMore},a.scrollHeight=200,a.offset=50,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){g.getAccesToken()}},{key:"render",value:function(){return c.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(r.Component),x=a(3),j=a(4),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSearchTerm=function(e){var t=e.target.value;a.context.updateState("searchTerm",t),clearTimeout(a.delay),a.delay=setTimeout(a.search(t),16.7)},a.search=function(e){a.context.searchSpotify(e),"/"===a.props.location.pathname&&a.props.history.push("/search")},a.delay=null,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{onChange:this.handleSearchTerm,placeholder:"Enter A Song, Album, or Artist"}),c.a.createElement(h.a,{to:"/search"},c.a.createElement(x.a,{className:"Search_Button",icon:j.j}),c.a.createElement("button",{type:"submit",onClick:this.submitSearch,name:"SEARCH"})))}}]),t}(r.PureComponent);O.contextType=E;var w=O,T=(a(41),a(110)),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Navbar-wrapper"},c.a.createElement("div",{className:"Navbar"},c.a.createElement(T.a,{className:"LinkButton",to:"/search"},c.a.createElement(x.a,{icon:j.j}),"  Search"),c.a.createElement(T.a,{className:"LinkButton",to:"/currentPlaylist"},c.a.createElement(x.a,{icon:j.a})," Current Playlist"),c.a.createElement(T.a,{className:"LinkButton",to:"/newPlaylist"},c.a.createElement(x.a,{icon:j.i})," New Playlist"),c.a.createElement(T.a,{className:"LinkButton",to:"/library"},c.a.createElement(x.a,{icon:j.k})," Library"),c.a.createElement(T.a,{className:"LinkButton",to:"/userPlaylists"},c.a.createElement(x.a,{icon:j.d})," Playlists")))}}]),t}(r.PureComponent),N=(a(45),a(47),a(49),a(51),function(e){var t=e.name,a=e.artist,n=e.textSize,r=e.overfl;return c.a.createElement("div",{className:"Text"},c.a.createElement("p",{style:{fontSize:n,overflow:r}},t),c.a.createElement("p",{style:{fontSize:n,overflow:r}},a))}),A=(a(53),function(e){var t=e.ms;return c.a.createElement("div",{className:"Time"},function(e){var t,a,n;return a=Math.floor(e/1e3),t=Math.floor(a/60),n="0".concat(a%=60).slice(-2),"".concat(t,":").concat(n)}(t))}),S=(a(55),a(57),function(e){var t=e.onPlayClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"play-pause",onClick:t},c.a.createElement(x.a,{className:"button",icon:j.g,size:"lg"})))}),B=(a(59),function(e){var t=e.onAdd;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"AddButton",onClick:t},c.a.createElement(x.a,{className:"button",icon:j.h,size:"lg"})))}),M=(a(61),function(e){var t=e.onDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"DeleteButton",onClick:t},c.a.createElement(x.a,{className:"button",icon:j.e,size:"lg"})))}),z=function(e){var t=e.trackAction,a=e.onPlayClick,n=e.inPlaylist,r=e.playlist;return c.a.createElement("div",{className:"Action-Overlay ".concat("artist"===r?"artist":null)},n?c.a.createElement(M,{onDelete:t}):c.a.createElement(B,{onAdd:t}),c.a.createElement(S,{onPlayClick:a}))},L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handlePlay=function(e){var t=a.props.getUrisList();g.playTrack(a.props.track.uri,t)},a.handleTrackAction=function(e){a.props.trackAction(a.props.track)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.track,t=e.artists,a=e.name,n=e.album,r=e.duration_ms;return c.a.createElement("div",{className:"Track"},c.a.createElement("div",{className:"Track-information"},c.a.createElement("div",{className:"Album-img"},n.images[2]?c.a.createElement("img",{src:n.images[2].url,alt:"album"}):null),c.a.createElement("div",{className:"Track-name"},c.a.createElement(N,{name:a,artist:t[0].name})),c.a.createElement(A,{ms:r})),c.a.createElement(z,{trackAction:this.handleTrackAction,onPlayClick:this.handlePlay,inPlaylist:this.props.inPlaylist}))}}]),t}(r.PureComponent),_=(a(63),function(e){var t=e.children;return c.a.createElement("div",{className:"Grid"},t)}),I=function(e){var t=e.trackAction,a=e.inPlaylist,n=e.tracklist,r=function(){var e=[];return n.map(function(t){return e.push(t.uri)}),e};return c.a.createElement(_,null,n.map(function(e){return c.a.createElement(L,{track:e,key:e.id,trackAction:t,inPlaylist:a,getUrisList:r})}))},F=(a(65),function(e){var t=e.type,a=e.buttonAction,n=e.name;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"Button",type:t,onClick:a},n))}),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).savePlayList=function(){var e=a.context.newPlaylist,t=a.state.playlistName;if(e.length>0&&t.length>0){var n=e.map(function(e){return e.uri});g.sendPlayList(t,n)}},a.handleChange=function(e){a.setState({playlistName:e.target.value})},a.state={playlistName:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.context,t=e.newPlaylist,a=e.deleteTrack;return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{onChange:this.handleChange,placeholder:"Playlist"}),c.a.createElement(I,{tracklist:t,trackAction:a,inPlaylist:!0}),c.a.createElement(F,{type:"submit",buttonAction:this.savePlayList,name:"SAVE TO SPOTIFY"}))}}]),t}(r.PureComponent);U.contextType=E;var H=U,V=(a(67),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(I,{tracklist:[]})}}]),t}(r.PureComponent)),D=(a(69),a(71),a(112)),W=a(43),J=function(e){var t=e.children;return c.a.createElement(_,null,c.a.createElement(D.a,null,c.a.createElement(W.a,{exact:!0,path:"/search",render:function(){return t}}),c.a.createElement(W.a,{path:"/search/playlists",render:function(){return t[0]}}),c.a.createElement(W.a,{path:"/search/tracks",render:function(){return t[1]}}),c.a.createElement(W.a,{path:"/search/albums",render:function(){return t[2]}}),c.a.createElement(W.a,{path:"/search/artists",render:function(){return t[3]}})))},R=a(14),q=(a(73),a(75),a(77),function(e){var t=e.children;return c.a.createElement("div",{className:"Title"},t)}),G=(a(79),function(){return c.a.createElement("div",{className:"Border"})}),Q=function(e){var t=e.children,a=e.buttonAction,n=e.name;return c.a.createElement("div",{className:"Header"},c.a.createElement(q,null,t),c.a.createElement(F,{type:"button",buttonAction:a,name:n}),c.a.createElement(G,null))},Y=function(e){e.tracklist,e.addToPlaylist;var t=e.history,a=Object(r.useContext)(E),n=Object(r.useState)({expanded:!1,state:"More",results:4}),s=Object(R.a)(n,2),i=s[0],o=s[1];return c.a.createElement("div",{className:"ResultsTracklist"},c.a.createElement(Q,{name:i.state,buttonAction:function(){o(function(){return"/search/tracks"===t.location.pathname?(t.push("/search"),{expanded:!1,state:"More",results:4}):(t.push("/search/tracks"),{expanded:!0,state:"Less",results:1/0})})}},"Tracks"),c.a.createElement(I,{trackAction:a.addToNewPlaylist,tracklist:a.tracks.slice(0,i.results)}))},$=(a(81),a(83),a(85),function(e){var t=e.playlist,a=e.handleOnclick,n=e.id;return c.a.createElement("div",{className:"Card ".concat("artist"===t.type&&"artist")},c.a.createElement("div",{className:"Card-Img ".concat("artist"===t.type&&"artist")},t.images[0]?c.a.createElement("img",{src:t.images[0].url,alt:"img"}):null),c.a.createElement(N,{name:t.name}),c.a.createElement(z,{trackAction:function(){return a(n,t)},playlist:"artist"===t.type?"artist":null,onPlayClick:function(){var e=t.uri.split(":").slice(2).join(":");g.playTrack("",e)}}))}),K=function(e){var t=e.playlists,a=e.traverse,n=e.albums,s=e.libary,i=Object(r.useContext)(E),o=function(e,t){var r=t.images,c=[],o="spotify";n?(o="spotifyAlbum",g.getPlaylist(e,o).then(function(e){e.map(function(e){return e.album={images:r},c.push(e)}),i.addToNewPlaylist(c,"tracklist")})):s&&void 0===t.type?g.getCategoriePlaylist(t.id).then(function(e){return a(e)}):g.getPlaylist(e,o).then(function(e){e.map(function(e){return c.push(e.track)}),i.addToNewPlaylist(c,"tracklist")})};return c.a.createElement("div",{className:"PlaylistDisplay"},t.map(function(e){return c.a.createElement($,{playlist:e,id:e.id,key:e.id,handleOnclick:o})}))},X=function(e){var t=e.addToCurrentPlaylist,a=e.history,n=Object(r.useContext)(E),s=Object(r.useState)({expanded:!1,state:"More",results:3}),i=Object(R.a)(s,2),o=i[0],l=i[1];return c.a.createElement("div",{className:"Albumslist"},c.a.createElement(Q,{name:o.state,buttonAction:function(){l(function(){return"/search/albums"===a.location.pathname?(a.push("/search"),{expanded:!1,state:"More",results:3}):(a.push("/search/albums"),{expanded:!0,state:"Less",results:1/0})})}},"Albums"),c.a.createElement(K,{addToCurrentPlaylist:t,playlists:n.albums.slice(0,o.results),albums:!0}))},Z=(a(87),function(e){var t=e.addToCurrentPlaylist,a=e.history,n=Object(r.useContext)(E),s=Object(r.useState)({expanded:!1,state:"More",results:3}),i=Object(R.a)(s,2),o=i[0];i[1];return c.a.createElement("div",{className:"Artists"},c.a.createElement(Q,{name:o.state,buttonAction:function(){"/search/artists"===a.location.pathname?a.push("/search"):a.push("/search/artists")},artists:!0},"Artists"),c.a.createElement(K,{addToCurrentPlaylist:t,playlists:n.artists.slice(0,"/search/albums"===a.location.pathname?1/0:3)}))}),ee=(a(89),function(e){var t=e.addToCurrentPlaylist,a=e.history,n=Object(r.useContext)(E),s=Object(r.useState)({expanded:!1,state:"More",results:3}),i=Object(R.a)(s,2),o=i[0],l=i[1];return c.a.createElement("div",{className:"Playlists"},c.a.createElement(Q,{name:o.state,buttonAction:function(){l(function(){return"/search/playlists"===a.location.pathname?(a.push("/search"),{expanded:!1,state:"More",results:3}):(a.push("/search/playlists"),{expanded:!0,state:"Less",results:1/0})})}},"Playlists"),c.a.createElement(K,{addToCurrentPlaylist:t,playlists:n.playlists.slice(0,o.results)}))}),te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadOnScroll=function(e){var t=a.context,n=t.searchTerm,r=t.searchMore,c=a.props.location.pathname.split("/")[1],s=a.props.location.pathname.split("/")[2];a.scrollHeight<=e.target.scrollTop&&"search"===c&&(a.scrollHeight+=2075,a.offset+=50,g.nextResults(n,a.offset,s).then(function(e){r(e,s)}))},a.scrollHeight=300,a.offset=50,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){"/search"===this.props.history.location.pathname&&(this.offset=50,this.scrollHeight=300)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Main",onScroll:this.loadOnScroll},c.a.createElement(D.a,null,c.a.createElement(W.a,{path:"/search",render:function(e){return c.a.createElement(J,null,c.a.createElement(ee,Object.assign({key:1},e)),c.a.createElement(Y,Object.assign({key:2},e)),c.a.createElement(X,Object.assign({key:3},e)),c.a.createElement(Z,Object.assign({key:4},e)))}}),c.a.createElement(W.a,{path:"/currentPlaylist",render:function(){return e.props.children[0]}}),c.a.createElement(W.a,{path:"/newPlaylist",render:function(){return e.props.children[1]}}),c.a.createElement(W.a,{path:"/library",render:function(){return e.props.children[2]}}),c.a.createElement(W.a,{path:"/userPlaylists",render:function(){return e.props.children[3]}})))}}]),t}(r.PureComponent);te.contextType=E;var ae=te,ne=(a(91),a(93),function(e){var t=e.currentPostion,a=e.sliderAction,n=e.maxValue,r=e.handleMouseUp;return c.a.createElement("div",{className:"Bar-container"},c.a.createElement("input",{className:"Bar",onMouseUp:r,onChange:function(e){return a(e)},step:"1",type:"range",min:"1",value:t,max:n}),c.a.createElement("div",{className:"progression",style:{width:"".concat(100/n*t,"%")}}))}),re=(a(95),function(e){var t=e.onPlayClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"play-pause",onClick:t},c.a.createElement(x.a,{className:"button",icon:j.f,size:"lg"})))}),ce=(a(97),function(e){var t=e.onForward;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"forward",onClick:t},c.a.createElement(x.a,{className:"button",icon:j.c,size:"sm"})))}),se=(a(99),function(e){var t=e.onBackward;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"back",onClick:t},c.a.createElement(x.a,{className:"button",icon:j.b,size:"sm"})))}),ie=(a(101),function(e){var t=e.togglePlaylist;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"Playlist-Button"},c.a.createElement(x.a,{icon:j.d,onClick:t})))}),oe=(a(103),function(e){var t=e.children;return c.a.createElement("div",{className:"Track-Progression"},t)}),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).checkForPlayer=function(){var e=a.state.token;null!==window.Spotify&&(clearInterval(a.playerCheckInterval),a.player=new window.Spotify.Player({name:"SpotifyClone",getOAuthToken:function(t){t(e)}}),a.createEventHandlers(),a.player.connect(),setTimeout(function(){return a.getPlayerStateTimer=setInterval(function(){return a.getPlayerCurrentstate()},500)},1e3))},a.createEventHandlers=function(){a.player.on("initialization_error",function(e){return console.error(e)}),a.player.on("authentication_error",function(e){return console.error(e)}),a.player.on("account_error",function(e){return console.error(e)}),a.player.on("playback_error",function(e){return console.error(e)}),a.player.on("player_state_changed",function(e){return a.onStateChanged(e)}),a.player.on("ready",function(e){var t=e.device_id;a.setState({deviceId:t}),g.transferPlaybackHere(t)})},a.onStateChanged=function(e){if(null!==e){var t=e.track_window.current_track,n=t.name,r=t.album.name,c=t.artists.map(function(e){return e.name}).join(", "),s=!e.paused,i=t.duration_ms;a.setState({currentTrack:t,duration:i,trackName:n,albumName:r,artistName:c,playing:s}),a.player.getVolume().then(function(e){return a.setState({volume:100*e})})}},a.getPlayerCurrentstate=function(){a.player.getCurrentState().then(function(e){return a.setState({position:e.position})})},a.onPrevClick=function(){a.player.previousTrack()},a.onPlayClick=function(){a.player.togglePlay()},a.onNextClick=function(){a.player.nextTrack()},a.onVolumeClick=function(e){var t=e.target.value;a.player.setVolume(t/100).then(function(){return a.setState({volume:t})})},a.onSeek=function(e){clearInterval(a.getPlayerStateTimer),a.setState({position:e.target.value})},a.handleMouseUp=function(e){a.player.seek(a.state.position).then(function(){a.getPlayerStateTimer=setInterval(function(){return a.getPlayerCurrentstate()},100)})},a.toggleMute=function(e){a.state.mute?(a.player.setVolume(a.state.volume/100),a.setState({mute:!1})):(a.player.setVolume(0),a.setState({mute:!0}))},a.togglePlaylist=function(e){"hidden"===a.state.showPlaylist?a.setState({showPlaylist:"visible"}):a.setState({showPlaylist:"hidden"})},a.state={token:"",deviceId:"",loggedIn:!0,playing:!1,error:"",currentTrack:"",trackName:"",artistName:"",albumName:"",position:0,duration:0,volume:0,mute:!1,showPlaylist:"hidden"},a.playerCheckInterval=null,a.getPlayerStateTimer=null,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({token:g.getAccesToken()}),this.playerCheckInterval=setInterval(function(){return e.checkForPlayer()},800)}},{key:"render",value:function(){var e=this.state,t=e.playing,a=e.currentTrack,n=e.volume,r=e.duration,s=e.position,i=e.artistName,o=e.trackName,l=e.showPlaylist;return c.a.createElement("div",{className:"Player"},c.a.createElement("div",{className:"Track-info"},this.state.playing?c.a.createElement(L,{track:a}):c.a.createElement("p",null,i,": ",o)),c.a.createElement("div",{className:"Control"},c.a.createElement("div",{className:"Player-buttons"},c.a.createElement(se,{onBackward:this.onPrevClick}),t?c.a.createElement(re,{onPlayClick:this.onPlayClick}):c.a.createElement(S,{onPlayClick:this.onPlayClick}),c.a.createElement(ce,{onForward:this.onNextClick})),c.a.createElement(oe,null,c.a.createElement(A,{ms:s}),c.a.createElement("div",{className:"Track-Bar"},c.a.createElement(ne,{currentPostion:s,sliderAction:this.onSeek,maxValue:r,handleMouseUp:this.handleMouseUp})),c.a.createElement(A,{ms:r}))),c.a.createElement("div",{className:"Control-Leftside"},c.a.createElement("div",{className:"Current-Playlist-Container",style:{visibility:l}},c.a.createElement(V,{playlist:this.props.currentPlaylist})),c.a.createElement(ie,{togglePlaylist:this.togglePlaylist}),c.a.createElement("div",{className:"volume"},c.a.createElement(x.a,{icon:j.l,size:"sm",onClick:this.toggleMute}),c.a.createElement("div",{className:"volume-bar"},c.a.createElement(ne,{currentPostion:n,sliderAction:this.onVolumeClick,maxValue:"100"})))))}}]),t}(r.PureComponent),ue=(a(105),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).traverse=function(e){!0===a.state.istrackList?a.props.addToCurrentPlaylist(e):a.setState({playlists:e,istrackList:!0})},a.state={playlists:[],istrackList:!1,results:6},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.browserSpotify().then(function(t){e.setState({playlists:t})})}},{key:"render",value:function(){var e=this.state.playlists;return c.a.createElement(_,null,c.a.createElement(K,{playlists:e,traverse:this.traverse,libary:!0}))}}]),t}(r.PureComponent)),pe=(a(107),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={userPlaylists:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.getPlaylist().then(function(t){e.setState({userPlaylists:t})})}},{key:"render",value:function(){var e=this.state.userPlaylists,t=this.props.addToCurrentPlaylist;return c.a.createElement(_,null,c.a.createElement(K,{playlists:e,addToCurrentPlaylist:t}))}}]),t}(r.PureComponent)),me=a(113),he=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).scrollHeight=200,a.offset=50,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){g.getAccesToken()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,{history:this.props.history,location:this.props.location}),c.a.createElement(C,null),c.a.createElement(ae,{history:this.props.history,location:this.props.location},c.a.createElement(V,null),c.a.createElement(H,null),c.a.createElement(ue,null),c.a.createElement(pe,null)),c.a.createElement(le,null))}}]),t}(r.PureComponent),fe=Object(me.a)(he),de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ve=a(111);i.a.render(c.a.createElement(ve.a,null,c.a.createElement(P,null,c.a.createElement(fe,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/SpotifyClone",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/SpotifyClone","/service-worker.js");de?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ye(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ye(e)})}}()}]),[[27,2,1]]]);
//# sourceMappingURL=main.4fef11c3.chunk.js.map
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ns="150";const Pt="srgb",Hi="srgb-linear",lr="display-p3";const ms="300 es";class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gs=1234567;const Vi=Math.PI/180,yn=180/Math.PI;function Ci(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[i&255]+tt[i>>8&255]+tt[i>>16&255]+tt[i>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function ss(r,e){return(r%e+e)%e}function Nr(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Or(r,e,t){return r!==e?(t-r)/(e-r):0}function Wi(r,e,t){return(1-t)*r+t*e}function kr(r,e,t,i){return Wi(r,e,1-Math.exp(-t*i))}function Vr(r,e=1){return e-Math.abs(ss(r,e*2)-e)}function Wr(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Hr(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qr(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Xr(r,e){return r+Math.random()*(e-r)}function Yr(r){return r*(.5-Math.random())}function jr(r){r!==void 0&&(gs=r);let e=gs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $r(r){return r*Vi}function Zr(r){return r*yn}function es(r){return(r&r-1)===0&&r!==0}function Kr(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jr(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:Vi,RAD2DEG:yn,generateUUID:Ci,clamp:ft,euclideanModulo:ss,mapLinear:Nr,inverseLerp:Or,lerp:Wi,damp:kr,pingpong:Vr,smoothstep:Wr,smootherstep:Hr,randInt:qr,randFloat:Xr,randFloatSpread:Yr,seededRandom:jr,degToRad:$r,radToDeg:Zr,isPowerOfTwo:es,ceilPowerOfTwo:Kr,floorPowerOfTwo:cr,setQuaternionFromProperEuler:Jr,normalize:dt,denormalize:Gi};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],g=i[8],p=n[0],f=n[3],M=n[6],S=n[1],x=n[4],y=n[7],C=n[2],A=n[5],P=n[8];return s[0]=a*p+o*S+l*C,s[3]=a*f+o*x+l*A,s[6]=a*M+o*y+l*P,s[1]=c*p+h*S+d*C,s[4]=c*f+h*x+d*A,s[7]=c*M+h*y+d*P,s[2]=u*p+m*S+g*C,s[5]=u*f+m*x+g*A,s[8]=u*M+m*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,m=c*s-a*l,g=t*d+i*u+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(n*c-h*i)*p,e[2]=(o*i-n*a)*p,e[3]=u*p,e[4]=(h*t-n*l)*p,e[5]=(n*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(An.makeScale(e,t)),this}rotate(e){return this.premultiply(An.makeRotation(-e)),this}translate(e,t){return this.premultiply(An.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const An=new ct;function hr(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class oi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==u||c!==m||h!==g){let f=1-o;const M=l*u+c*m+h*g+d*p,S=M>=0?1:-1,x=1-M*M;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,M*S);f=Math.sin(f*A)/C,o=Math.sin(o*A)/C}const y=o*S;if(l=l*f+u*y,c=c*f+m*y,h=h*f+g*y,d=d*f+p*y,f===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-o*m,e[t+2]=c*g+h*m+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),m=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-n)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-n)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_s.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_s.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*n-o*i,h=l*i+o*t-s*n,d=l*n+s*i-a*t,u=-s*t-a*i-o*n;return this.x=c*l+u*-s+h*-o-d*-a,this.y=h*l+u*-a+d*-s-c*-o,this.z=d*l+u*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ln.copy(this).projectOnVector(e),this.sub(Ln)}reflect(e){return this.sub(Ln.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ln=new T,_s=new oi;function Si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qr=new ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eo=new ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Xt=new T;function to(r){return r.convertSRGBToLinear(),Xt.set(r.r,r.g,r.b).applyMatrix3(eo),r.setRGB(Xt.x,Xt.y,Xt.z)}function io(r){return Xt.set(r.r,r.g,r.b).applyMatrix3(Qr),r.setRGB(Xt.x,Xt.y,Xt.z).convertLinearToSRGB()}const no={[Hi]:r=>r,[Pt]:r=>r.convertSRGBToLinear(),[lr]:to},so={[Hi]:r=>r,[Pt]:r=>r.convertLinearToSRGB(),[lr]:io},at={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Hi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=no[e],n=so[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let li;class ur{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=qi("canvas")),li.width=e.width,li.height=e.height;const i=li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dr{constructor(e=null){this.isSource=!0,this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Pn(n[a].image)):s.push(Pn(n[a]))}else s=Pn(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pn(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ur.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ro=0;class ht extends Ti{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=ht.DEFAULT_ANISOTROPY,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ro++}),this.uuid=Ci(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ht.DEFAULT_IMAGE=null;ht.DEFAULT_MAPPING=300;ht.DEFAULT_ANISOTROPY=1;class Ue{constructor(e=0,t=0,i=0,n=1){Ue.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],p=l[2],f=l[6],M=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,C=(M+1)/2,A=(h+u)/4,P=(d+p)/4,_=(g+f)/4;return x>y&&x>C?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=A/i,s=P/i):y>C?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=A/n,s=_/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=P/s,n=_/s),this.set(i,n,s,t),this}let S=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(d-p)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ri extends Ti{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new ht(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends ht{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oo extends ht{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<i&&(i=d),u<n&&(n=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<i&&(i=d),u<n&&(n=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Jt.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jt)}else i.boundingBox===null&&i.computeBoundingBox(),Rn.copy(i.boundingBox),Rn.applyMatrix4(e.matrixWorld),this.union(Rn);const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Zi.subVectors(this.max,Di),ci.subVectors(e.a,Di),hi.subVectors(e.b,Di),ui.subVectors(e.c,Di),Vt.subVectors(hi,ci),Wt.subVectors(ui,hi),Qt.subVectors(ci,ui);let t=[0,-Vt.z,Vt.y,0,-Wt.z,Wt.y,0,-Qt.z,Qt.y,Vt.z,0,-Vt.x,Wt.z,0,-Wt.x,Qt.z,0,-Qt.x,-Vt.y,Vt.x,0,-Wt.y,Wt.x,0,-Qt.y,Qt.x,0];return!Fn(t,ci,hi,ui,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Fn(t,ci,hi,ui,Zi))?!1:(Ki.crossVectors(Vt,Wt),t=[Ki.x,Ki.y,Ki.z],Fn(t,ci,hi,ui,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(It[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),It[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),It[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),It[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),It[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),It[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),It[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),It[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(It),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const It=[new T,new T,new T,new T,new T,new T,new T,new T],Jt=new T,Rn=new Yi,ci=new T,hi=new T,ui=new T,Vt=new T,Wt=new T,Qt=new T,Di=new T,Zi=new T,Ki=new T,ei=new T;function Fn(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){ei.fromArray(r,s);const o=n.x*Math.abs(ei.x)+n.y*Math.abs(ei.y)+n.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=i.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ao=new Yi,Pi=new T,In=new T;class ji{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ao.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Pi,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(In.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(In)),this.expandByPoint(Pi.copy(e.center).sub(In))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zt=new T,zn=new T,Ji=new T,Ht=new T,Bn=new T,Qi=new T,Un=new T;class rs{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zt.copy(this.origin).addScaledVector(this.direction,t),zt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){zn.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),Ht.copy(this.origin).sub(zn);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ji),o=Ht.dot(this.direction),l=-Ht.dot(Ji),c=Ht.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(zn).addScaledVector(Ji,u),m}intersectSphere(e,t){zt.subVectors(e.center,this.origin);const i=zt.dot(this.direction),n=zt.dot(zt)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,zt)!==null}intersectTriangle(e,t,i,n,s){Bn.subVectors(t,e),Qi.subVectors(i,e),Un.crossVectors(Bn,Qi);let a=this.direction.dot(Un),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ht.subVectors(this.origin,e);const l=o*this.direction.dot(Qi.crossVectors(Ht,Qi));if(l<0)return null;const c=o*this.direction.dot(Bn.cross(Ht));if(c<0||l+c>a)return null;const h=-o*Ht.dot(Un);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,a,o,l,c,h,d,u,m,g,p,f){const M=this.elements;return M[0]=e,M[4]=t,M[8]=i,M[12]=n,M[1]=s,M[5]=a,M[9]=o,M[13]=l,M[2]=c,M[6]=h,M[10]=d,M[14]=u,M[3]=m,M[7]=g,M[11]=p,M[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*d,g=o*h,p=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-p*c,t[9]=-o*l,t[2]=p-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,g=c*h,p=c*d;t[0]=u+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=p+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,g=c*h,p=c*d;t[0]=u-p*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=p-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*d,g=o*h,p=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*h,t[4]=p-u*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-p*d}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+p,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lo,e,co)}lookAt(e,t,i){const n=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),qt.crossVectors(i,_t),qt.lengthSq()===0&&(Math.abs(i.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),qt.crossVectors(i,_t)),qt.normalize(),en.crossVectors(_t,qt),n[0]=qt.x,n[4]=en.x,n[8]=_t.x,n[1]=qt.y,n[5]=en.y,n[9]=_t.y,n[2]=qt.z,n[6]=en.z,n[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],g=i[2],p=i[6],f=i[10],M=i[14],S=i[3],x=i[7],y=i[11],C=i[15],A=n[0],P=n[4],_=n[8],E=n[12],D=n[1],H=n[5],O=n[9],B=n[13],R=n[2],k=n[6],Y=n[10],K=n[14],q=n[3],J=n[7],j=n[11],fe=n[15];return s[0]=a*A+o*D+l*R+c*q,s[4]=a*P+o*H+l*k+c*J,s[8]=a*_+o*O+l*Y+c*j,s[12]=a*E+o*B+l*K+c*fe,s[1]=h*A+d*D+u*R+m*q,s[5]=h*P+d*H+u*k+m*J,s[9]=h*_+d*O+u*Y+m*j,s[13]=h*E+d*B+u*K+m*fe,s[2]=g*A+p*D+f*R+M*q,s[6]=g*P+p*H+f*k+M*J,s[10]=g*_+p*O+f*Y+M*j,s[14]=g*E+p*B+f*K+M*fe,s[3]=S*A+x*D+y*R+C*q,s[7]=S*P+x*H+y*k+C*J,s[11]=S*_+x*O+y*Y+C*j,s[15]=S*E+x*B+y*K+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],p=e[7],f=e[11],M=e[15];return g*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*m-i*l*m)+p*(+t*l*m-t*c*u+s*a*u-n*a*m+n*c*h-s*l*h)+f*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*h-i*c*h)+M*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],p=e[13],f=e[14],M=e[15],S=d*f*c-p*u*c+p*l*m-o*f*m-d*l*M+o*u*M,x=g*u*c-h*f*c-g*l*m+a*f*m+h*l*M-a*u*M,y=h*p*c-g*d*c+g*o*m-a*p*m-h*o*M+a*d*M,C=g*d*l-h*p*l-g*o*u+a*p*u+h*o*f-a*d*f,A=t*S+i*x+n*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=S*P,e[1]=(p*u*s-d*f*s-p*n*m+i*f*m+d*n*M-i*u*M)*P,e[2]=(o*f*s-p*l*s+p*n*c-i*f*c-o*n*M+i*l*M)*P,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*m-i*l*m)*P,e[4]=x*P,e[5]=(h*f*s-g*u*s+g*n*m-t*f*m-h*n*M+t*u*M)*P,e[6]=(g*l*s-a*f*s-g*n*c+t*f*c+a*n*M-t*l*M)*P,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*m+t*l*m)*P,e[8]=y*P,e[9]=(g*d*s-h*p*s-g*i*m+t*p*m+h*i*M-t*d*M)*P,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*M+t*o*M)*P,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*m-t*o*m)*P,e[12]=C*P,e[13]=(h*p*n-g*d*n+g*i*u-t*p*u-h*i*f+t*d*f)*P,e[14]=(g*o*n-a*p*n-g*i*l+t*p*l+a*i*f-t*o*f)*P,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*P,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,m=s*h,g=s*d,p=a*h,f=a*d,M=o*d,S=l*c,x=l*h,y=l*d,C=i.x,A=i.y,P=i.z;return n[0]=(1-(p+M))*C,n[1]=(m+y)*C,n[2]=(g-x)*C,n[3]=0,n[4]=(m-y)*A,n[5]=(1-(u+M))*A,n[6]=(f+S)*A,n[7]=0,n[8]=(g+x)*P,n[9]=(f-S)*P,n[10]=(1-(u+p))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=di.set(n[0],n[1],n[2]).length();const a=di.set(n[4],n[5],n[6]).length(),o=di.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],wt.copy(this);const c=1/s,h=1/a,d=1/o;return wt.elements[0]*=c,wt.elements[1]*=c,wt.elements[2]*=c,wt.elements[4]*=h,wt.elements[5]*=h,wt.elements[6]*=h,wt.elements[8]*=d,wt.elements[9]*=d,wt.elements[10]*=d,t.setFromRotationMatrix(wt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),d=(i+n)/(i-n),u=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){const o=this.elements,l=1/(t-e),c=1/(i-n),h=1/(a-s),d=(t+e)*l,u=(i+n)*c,m=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const di=new T,wt=new Be,lo=new T(0,0,0),co=new T(1,1,1),qt=new T,en=new T,_t=new T,xs=new Be,vs=new oi;class $i{constructor(e=0,t=0,i=0,n=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vs.setFromEuler(this),this.setFromQuaternion(vs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class pr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ho=0;const ys=new T,fi=new oi,Bt=new Be,tn=new T,Ri=new T,uo=new T,fo=new oi,Ms=new T(1,0,0),Ss=new T(0,1,0),ws=new T(0,0,1),po={type:"added"},bs={type:"removed"};class et extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ho++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new T,t=new $i,i=new oi,n=new T(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new ct}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(Ss,e)}rotateZ(e){return this.rotateOnAxis(ws,e)}translateOnAxis(e,t){return ys.copy(e).applyQuaternion(this.quaternion),this.position.add(ys.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(Ss,e)}translateZ(e){return this.translateOnAxis(ws,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tn.copy(e):tn.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bt.lookAt(Ri,tn,this.up):Bt.lookAt(tn,Ri,this.up),this.quaternion.setFromRotationMatrix(Bt),n&&(Bt.extractRotation(n.matrixWorld),fi.setFromRotationMatrix(Bt),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(po)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,uo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,fo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}et.DEFAULT_UP=new T(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bt=new T,Ut=new T,Gn=new T,Gt=new T,pi=new T,mi=new T,Es=new T,Nn=new T,On=new T,kn=new T;class Ot{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),bt.subVectors(e,t),n.cross(bt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){bt.subVectors(n,t),Ut.subVectors(i,t),Gn.subVectors(e,t);const a=bt.dot(bt),o=bt.dot(Ut),l=bt.dot(Gn),c=Ut.dot(Ut),h=Ut.dot(Gn),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Gt),Gt.x>=0&&Gt.y>=0&&Gt.x+Gt.y<=1}static getUV(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Gt),l.set(0,0),l.addScaledVector(s,Gt.x),l.addScaledVector(a,Gt.y),l.addScaledVector(o,Gt.z),l}static isFrontFacing(e,t,i,n){return bt.subVectors(i,t),Ut.subVectors(e,t),bt.cross(Ut).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bt.subVectors(this.c,this.b),Ut.subVectors(this.a,this.b),bt.cross(Ut).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Ot.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;pi.subVectors(n,i),mi.subVectors(s,i),Nn.subVectors(e,i);const l=pi.dot(Nn),c=mi.dot(Nn);if(l<=0&&c<=0)return t.copy(i);On.subVectors(e,n);const h=pi.dot(On),d=mi.dot(On);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(pi,a);kn.subVectors(e,s);const m=pi.dot(kn),g=mi.dot(kn);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(mi,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Es.subVectors(s,n),o=(d-h)/(d-h+(m-g)),t.copy(n).addScaledVector(Es,o);const M=1/(f+p+u);return a=p*M,o=u*M,t.copy(i).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mo=0;class ai extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mo++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={h:0,s:0,l:0},nn={h:0,s:0,l:0};function Vn(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=at.workingColorSpace){if(e=ss(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vn(a,s,e+1/3),this.g=Vn(a,s,e),this.b=Vn(a,s,e-1/3)}return at.toWorkingColorSpace(this,n),this}setStyle(e,t=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,at.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,at.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,at.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,at.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=mr[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return at.fromWorkingColorSpace(it.copy(this),e),ft(it.r*255,0,255)<<16^ft(it.g*255,0,255)<<8^ft(it.b*255,0,255)<<0}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(it.copy(this),t);const i=it.r,n=it.g,s=it.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(it.copy(this),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Pt){at.fromWorkingColorSpace(it.copy(this),e);const t=it.r,i=it.g,n=it.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${n*255|0})`}offsetHSL(e,t,i){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=i,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(nn);const i=Wi(Et.h,nn.h,t),n=Wi(Et.s,nn.s,t),s=Wi(Et.l,nn.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const it=new Se;Se.NAMES=mr;class Yt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new T,sn=new Me;class Je{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXY(t,sn.x,sn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class gr extends Je{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _r extends Je{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oe extends Je{constructor(e,t,i){super(new Float32Array(e),t,i)}}let go=0;const yt=new Be,Wn=new et,gi=new T,xt=new Yi,Fi=new Yi,Ke=new T;class Qe extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:go++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hr(e)?_r:gr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,i){return yt.makeTranslation(e,t,i),this.applyMatrix4(yt),this}scale(e,t,i){return yt.makeScale(e,t,i),this.applyMatrix4(yt),this}lookAt(e){return Wn.lookAt(e),Wn.updateMatrix(),this.applyMatrix4(Wn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,xt.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,xt.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(xt.min),this.boundingBox.expandByPoint(xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(xt.min,Fi.min),xt.expandByPoint(Ke),Ke.addVectors(xt.max,Fi.max),xt.expandByPoint(Ke)):(xt.expandByPoint(Fi.min),xt.expandByPoint(Fi.max))}xt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ke.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ke));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),Ke.add(gi)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let D=0;D<o;D++)c[D]=new T,h[D]=new T;const d=new T,u=new T,m=new T,g=new Me,p=new Me,f=new Me,M=new T,S=new T;function x(D,H,O){d.fromArray(n,D*3),u.fromArray(n,H*3),m.fromArray(n,O*3),g.fromArray(a,D*2),p.fromArray(a,H*2),f.fromArray(a,O*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const B=1/(p.x*f.y-f.x*p.y);isFinite(B)&&(M.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(B),S.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(B),c[D].add(M),c[H].add(M),c[O].add(M),h[D].add(S),h[H].add(S),h[O].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let D=0,H=y.length;D<H;++D){const O=y[D],B=O.start,R=O.count;for(let k=B,Y=B+R;k<Y;k+=3)x(i[k+0],i[k+1],i[k+2])}const C=new T,A=new T,P=new T,_=new T;function E(D){P.fromArray(s,D*3),_.copy(P);const H=c[D];C.copy(H),C.sub(P.multiplyScalar(P.dot(H))).normalize(),A.crossVectors(_,H);const B=A.dot(h[D])<0?-1:1;l[D*4]=C.x,l[D*4+1]=C.y,l[D*4+2]=C.z,l[D*4+3]=B}for(let D=0,H=y.length;D<H;++D){const O=y[D],B=O.start,R=O.count;for(let k=B,Y=B+R;k<Y;k+=3)E(i[k+0]),E(i[k+1]),E(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const n=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ke.fromBufferAttribute(e,t),Ke.normalize(),e.setXYZ(t,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*h;for(let M=0;M<h;M++)u[g++]=c[m++]}return new Je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ts=new Be,Dt=new rs,rn=new ji,Cs=new T,Ii=new T,zi=new T,Bi=new T,Hn=new T,on=new T,an=new Me,ln=new Me,cn=new Me,qn=new T,hn=new T;class Ie extends et{constructor(e=new Qe,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){on.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Hn.fromBufferAttribute(d,e),a?on.addScaledVector(Hn,h):on.addScaledVector(Hn.sub(t),h))}t.add(on)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),rn.copy(i.boundingSphere),rn.applyMatrix4(s),Dt.copy(e.ray).recast(e.near),rn.containsPoint(Dt.origin)===!1&&(Dt.intersectSphere(rn,Cs)===null||Dt.origin.distanceToSquared(Cs)>(e.far-e.near)**2))||(Ts.copy(s).invert(),Dt.copy(e.ray).applyMatrix4(Ts),i.boundingBox!==null&&Dt.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv2,d=i.groups,u=i.drawRange;if(o!==null)if(Array.isArray(n))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=n[p.materialIndex],M=Math.max(p.start,u.start),S=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let x=M,y=S;x<y;x+=3){const C=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);a=un(this,f,e,Dt,c,h,C,A,P),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const M=o.getX(p),S=o.getX(p+1),x=o.getX(p+2);a=un(this,n,e,Dt,c,h,M,S,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=n[p.materialIndex],M=Math.max(p.start,u.start),S=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=M,y=S;x<y;x+=3){const C=x,A=x+1,P=x+2;a=un(this,f,e,Dt,c,h,C,A,P),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const M=p,S=p+1,x=p+2;a=un(this,n,e,Dt,c,h,M,S,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function _o(r,e,t,i,n,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===0,o),l===null)return null;hn.copy(o),hn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(hn);return c<t.near||c>t.far?null:{distance:c,point:hn.clone(),object:r}}function un(r,e,t,i,n,s,a,o,l){r.getVertexPosition(a,Ii),r.getVertexPosition(o,zi),r.getVertexPosition(l,Bi);const c=_o(r,e,t,i,Ii,zi,Bi,qn);if(c){n&&(an.fromBufferAttribute(n,a),ln.fromBufferAttribute(n,o),cn.fromBufferAttribute(n,l),c.uv=Ot.getUV(qn,Ii,zi,Bi,an,ln,cn,new Me)),s&&(an.fromBufferAttribute(s,a),ln.fromBufferAttribute(s,o),cn.fromBufferAttribute(s,l),c.uv2=Ot.getUV(qn,Ii,zi,Bi,an,ln,cn,new Me));const h={a,b:o,c:l,normal:new T,materialIndex:0};Ot.getNormal(Ii,zi,Bi,h.normal),c.face=h}return c}class kt extends Qe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function g(p,f,M,S,x,y,C,A,P,_,E){const D=y/P,H=C/_,O=y/2,B=C/2,R=A/2,k=P+1,Y=_+1;let K=0,q=0;const J=new T;for(let j=0;j<Y;j++){const fe=j*H-B;for(let U=0;U<k;U++){const Z=U*D-O;J[p]=Z*S,J[f]=fe*x,J[M]=R,c.push(J.x,J.y,J.z),J[p]=0,J[f]=0,J[M]=A>0?1:-1,h.push(J.x,J.y,J.z),d.push(U/P),d.push(1-j/_),K+=1}}for(let j=0;j<_;j++)for(let fe=0;fe<P;fe++){const U=u+fe+k*j,Z=u+fe+k*(j+1),ie=u+(fe+1)+k*(j+1),z=u+(fe+1)+k*j;l.push(U,Z,z),l.push(Z,ie,z),q+=6}o.addGroup(m,q,E),m+=q,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function lt(r){const e={};for(let t=0;t<r.length;t++){const i=bi(r[t]);for(const n in i)e[n]=i[n]}return e}function xo(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xr(r){return r.getRenderTarget()===null&&r.outputEncoding===3001?Pt:Hi}const vo={clone:bi,merge:lt};var yo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yo,this.fragmentShader=Mo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=xo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vr extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends vr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yn*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vi*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,xi=1;class So extends et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new pt(_i,xi,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new pt(_i,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new pt(_i,xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new pt(_i,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new pt(_i,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new pt(_i,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class yr extends ht{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wo extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new yr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new kt(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Ie(n,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new So(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const Xn=new T,bo=new T,Eo=new ct;class ti{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Xn.subVectors(i,t).cross(bo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xn),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Eo.getNormalMatrix(e),n=this.coplanarPoint(Xn).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new ji,dn=new T;class os{constructor(e=new ti,t=new ti,i=new ti,n=new ti,s=new ti,a=new ti){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7],u=i[8],m=i[9],g=i[10],p=i[11],f=i[12],M=i[13],S=i[14],x=i[15];return t[0].setComponents(o-n,d-l,p-u,x-f).normalize(),t[1].setComponents(o+n,d+l,p+u,x+f).normalize(),t[2].setComponents(o+s,d+c,p+m,x+M).normalize(),t[3].setComponents(o-s,d-c,p-m,x-M).normalize(),t[4].setComponents(o-a,d-h,p-g,x-S).normalize(),t[5].setComponents(o+a,d+h,p+g,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(dn.x=n.normal.x>0?e.max.x:e.min.x,dn.y=n.normal.y>0?e.max.y:e.min.y,dn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(dn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mr(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function To(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const d=c.array,u=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,n(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class Sn extends Qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,m=[],g=[],p=[],f=[];for(let M=0;M<h;M++){const S=M*u-a;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-S,0),p.push(0,0,1),f.push(x/o),f.push(1-M/l)}}for(let M=0;M<l;M++)for(let S=0;S<o;S++){const x=S+c*M,y=S+c*(M+1),C=S+1+c*(M+1),A=S+1+c*M;m.push(x,y,A),m.push(y,C,A)}this.setIndex(m),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Co=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ao=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lo=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Do=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Po=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ro=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fo="vec3 transformed = vec3( position );",Io=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zo=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Bo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Go=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,No=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ko=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ho=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jo=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$o=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ko=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qo="gl_FragColor = linearToOutputTexel( gl_FragColor );",ea=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ta=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ia=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,na=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sa=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ra=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oa=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aa=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,la=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ca=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ha=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ua=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,da=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fa=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pa=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ma=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ga=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_a=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xa=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,va=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ya=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ma=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sa=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wa=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ba=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ea=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ta=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ca=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Aa=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,La=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Da=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pa=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ra=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fa=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ia=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,za=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ba=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ua=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ga=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Na=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Oa=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ka=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Va=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wa=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ha=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qa=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Xa=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ya=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ja=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$a=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Za=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ka=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ja=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qa=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,el=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,il=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ol=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,al=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ll=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ul=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ml=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,_l=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xl=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vl=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yl=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ml=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Sl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,bl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const El=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Al=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ll=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pl=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Il=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ul=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nl=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ol=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$l=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ql=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ec=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tc=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ic=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:Co,alphamap_pars_fragment:Ao,alphatest_fragment:Lo,alphatest_pars_fragment:Do,aomap_fragment:Po,aomap_pars_fragment:Ro,begin_vertex:Fo,beginnormal_vertex:Io,bsdfs:zo,iridescence_fragment:Bo,bumpmap_pars_fragment:Uo,clipping_planes_fragment:Go,clipping_planes_pars_fragment:No,clipping_planes_pars_vertex:Oo,clipping_planes_vertex:ko,color_fragment:Vo,color_pars_fragment:Wo,color_pars_vertex:Ho,color_vertex:qo,common:Xo,cube_uv_reflection_fragment:Yo,defaultnormal_vertex:jo,displacementmap_pars_vertex:$o,displacementmap_vertex:Zo,emissivemap_fragment:Ko,emissivemap_pars_fragment:Jo,encodings_fragment:Qo,encodings_pars_fragment:ea,envmap_fragment:ta,envmap_common_pars_fragment:ia,envmap_pars_fragment:na,envmap_pars_vertex:sa,envmap_physical_pars_fragment:ga,envmap_vertex:ra,fog_vertex:oa,fog_pars_vertex:aa,fog_fragment:la,fog_pars_fragment:ca,gradientmap_pars_fragment:ha,lightmap_fragment:ua,lightmap_pars_fragment:da,lights_lambert_fragment:fa,lights_lambert_pars_fragment:pa,lights_pars_begin:ma,lights_toon_fragment:_a,lights_toon_pars_fragment:xa,lights_phong_fragment:va,lights_phong_pars_fragment:ya,lights_physical_fragment:Ma,lights_physical_pars_fragment:Sa,lights_fragment_begin:wa,lights_fragment_maps:ba,lights_fragment_end:Ea,logdepthbuf_fragment:Ta,logdepthbuf_pars_fragment:Ca,logdepthbuf_pars_vertex:Aa,logdepthbuf_vertex:La,map_fragment:Da,map_pars_fragment:Pa,map_particle_fragment:Ra,map_particle_pars_fragment:Fa,metalnessmap_fragment:Ia,metalnessmap_pars_fragment:za,morphcolor_vertex:Ba,morphnormal_vertex:Ua,morphtarget_pars_vertex:Ga,morphtarget_vertex:Na,normal_fragment_begin:Oa,normal_fragment_maps:ka,normal_pars_fragment:Va,normal_pars_vertex:Wa,normal_vertex:Ha,normalmap_pars_fragment:qa,clearcoat_normal_fragment_begin:Xa,clearcoat_normal_fragment_maps:Ya,clearcoat_pars_fragment:ja,iridescence_pars_fragment:$a,output_fragment:Za,packing:Ka,premultiplied_alpha_fragment:Ja,project_vertex:Qa,dithering_fragment:el,dithering_pars_fragment:tl,roughnessmap_fragment:il,roughnessmap_pars_fragment:nl,shadowmap_pars_fragment:sl,shadowmap_pars_vertex:rl,shadowmap_vertex:ol,shadowmask_pars_fragment:al,skinbase_vertex:ll,skinning_pars_vertex:cl,skinning_vertex:hl,skinnormal_vertex:ul,specularmap_fragment:dl,specularmap_pars_fragment:fl,tonemapping_fragment:pl,tonemapping_pars_fragment:ml,transmission_fragment:gl,transmission_pars_fragment:_l,uv_pars_fragment:xl,uv_pars_vertex:vl,uv_vertex:yl,uv2_pars_fragment:Ml,uv2_pars_vertex:Sl,uv2_vertex:wl,worldpos_vertex:bl,background_vert:El,background_frag:Tl,backgroundCube_vert:Cl,backgroundCube_frag:Al,cube_vert:Ll,cube_frag:Dl,depth_vert:Pl,depth_frag:Rl,distanceRGBA_vert:Fl,distanceRGBA_frag:Il,equirect_vert:zl,equirect_frag:Bl,linedashed_vert:Ul,linedashed_frag:Gl,meshbasic_vert:Nl,meshbasic_frag:Ol,meshlambert_vert:kl,meshlambert_frag:Vl,meshmatcap_vert:Wl,meshmatcap_frag:Hl,meshnormal_vert:ql,meshnormal_frag:Xl,meshphong_vert:Yl,meshphong_frag:jl,meshphysical_vert:$l,meshphysical_frag:Zl,meshtoon_vert:Kl,meshtoon_frag:Jl,points_vert:Ql,points_frag:ec,shadow_vert:tc,shadow_frag:ic,sprite_vert:nc,sprite_frag:sc},te={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ct},uv2Transform:{value:new ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ct}}},Rt={basic:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Se(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Se(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:lt([te.points,te.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:lt([te.common,te.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:lt([te.sprite,te.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:lt([te.common,te.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:lt([te.lights,te.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Rt.physical={uniforms:lt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const fn={r:0,b:0,g:0};function rc(r,e,t,i,n,s,a){const o=new Se(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(f,M){let S=!1,x=M.isScene===!0?M.background:null;x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x));const y=r.xr,C=y.getSession&&y.getSession();C&&C.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new Ie(new kt(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:bi(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=x.encoding!==3001,(d!==x||u!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ie(new Sn(2,2),new jt({name:"BackgroundMaterial",uniforms:bi(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=x.encoding!==3001,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,M){f.getRGB(fn,xr(r)),i.buffers.color.setClear(fn.r,fn.g,fn.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(f,M=1){o.set(f),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(o,l)},render:g}}function oc(r,e,t,i){const n=r.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function d(R,k,Y,K,q){let J=!1;if(a){const j=p(K,Y,k);c!==j&&(c=j,m(c.object)),J=M(R,K,Y,q),J&&S(R,K,Y,q)}else{const j=k.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==j)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=j,J=!0)}q!==null&&t.update(q,34963),(J||h)&&(h=!1,_(R,k,Y,K),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function u(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,k,Y){const K=Y.wireframe===!0;let q=o[R.id];q===void 0&&(q={},o[R.id]=q);let J=q[k.id];J===void 0&&(J={},q[k.id]=J);let j=J[K];return j===void 0&&(j=f(u()),J[K]=j),j}function f(R){const k=[],Y=[],K=[];for(let q=0;q<n;q++)k[q]=0,Y[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:K,object:R,attributes:{},index:null}}function M(R,k,Y,K){const q=c.attributes,J=k.attributes;let j=0;const fe=Y.getAttributes();for(const U in fe)if(fe[U].location>=0){const ie=q[U];let z=J[U];if(z===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),ie===void 0||ie.attribute!==z||z&&ie.data!==z.data)return!0;j++}return c.attributesNum!==j||c.index!==K}function S(R,k,Y,K){const q={},J=k.attributes;let j=0;const fe=Y.getAttributes();for(const U in fe)if(fe[U].location>=0){let ie=J[U];ie===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const z={};z.attribute=ie,ie&&ie.data&&(z.data=ie.data),q[U]=z,j++}c.attributes=q,c.attributesNum=j,c.index=K}function x(){const R=c.newAttributes;for(let k=0,Y=R.length;k<Y;k++)R[k]=0}function y(R){C(R,0)}function C(R,k){const Y=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;Y[R]=1,K[R]===0&&(r.enableVertexAttribArray(R),K[R]=1),q[R]!==k&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),q[R]=k)}function A(){const R=c.newAttributes,k=c.enabledAttributes;for(let Y=0,K=k.length;Y<K;Y++)k[Y]!==R[Y]&&(r.disableVertexAttribArray(Y),k[Y]=0)}function P(R,k,Y,K,q,J){i.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(R,k,Y,q,J):r.vertexAttribPointer(R,k,Y,K,q,J)}function _(R,k,Y,K){if(i.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=K.attributes,J=Y.getAttributes(),j=k.defaultAttributeValues;for(const fe in J){const U=J[fe];if(U.location>=0){let Z=q[fe];if(Z===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const ie=Z.normalized,z=Z.itemSize,le=t.get(Z);if(le===void 0)continue;const oe=le.buffer,ce=le.type,he=le.bytesPerElement;if(Z.isInterleavedBufferAttribute){const _e=Z.data,Ee=_e.stride,Ce=Z.offset;if(_e.isInstancedInterleavedBuffer){for(let Fe=0;Fe<U.locationSize;Fe++)C(U.location+Fe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)y(U.location+Fe);r.bindBuffer(34962,oe);for(let Fe=0;Fe<U.locationSize;Fe++)P(U.location+Fe,z/U.locationSize,ce,ie,Ee*he,(Ce+z/U.locationSize*Fe)*he)}else{if(Z.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)C(U.location+_e,Z.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<U.locationSize;_e++)y(U.location+_e);r.bindBuffer(34962,oe);for(let _e=0;_e<U.locationSize;_e++)P(U.location+_e,z/U.locationSize,ce,ie,z*he,z/U.locationSize*_e*he)}}else if(j!==void 0){const ie=j[fe];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(U.location,ie);break;case 3:r.vertexAttrib3fv(U.location,ie);break;case 4:r.vertexAttrib4fv(U.location,ie);break;default:r.vertexAttrib1fv(U.location,ie)}}}}A()}function E(){O();for(const R in o){const k=o[R];for(const Y in k){const K=k[Y];for(const q in K)g(K[q].object),delete K[q];delete k[Y]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const k=o[R.id];for(const Y in k){const K=k[Y];for(const q in K)g(K[q].object),delete K[q];delete k[Y]}delete o[R.id]}function H(R){for(const k in o){const Y=o[k];if(Y[R.id]===void 0)continue;const K=Y[R.id];for(const q in K)g(K[q].object),delete K[q];delete Y[R.id]}}function O(){B(),h=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function ac(r,e,t,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(n)u=r,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function lc(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),M=r.getParameter(36348),S=r.getParameter(36349),x=u>0,y=a||e.has("OES_texture_float"),C=x&&y,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:A}}function cc(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new ti,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||n;return n=u,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,M=r.get(d);if(!n||g===null||g.length===0||s&&!f)s?h(null):c();else{const S=s?0:i,x=S*4;let y=M.clippingState||null;l.value=y,y=h(g,u,x,m);for(let C=0;C!==x;++C)y[C]=t[C];M.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const M=m+p*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<M)&&(f=new Float32Array(M));for(let x=0,y=m;x!==p;++x,y+=4)a.copy(d[x]).applyMatrix4(S,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function hc(r){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wo(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sr extends vr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,As=[.125,.215,.35,.446,.526,.582],ni=20,Yn=new Sr,Ls=new Se;let jn=null;const ii=(1+Math.sqrt(5))/2,yi=1/ii,Ds=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ii,yi),new T(0,ii,-yi),new T(yi,0,ii),new T(-yi,0,ii),new T(ii,yi,0),new T(-ii,yi,0)];class Ps{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){jn=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Is(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jn),e.scissorTest=!1,pn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=Rs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rs(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uc(s)),this._blurMaterial=dc(s,e,t)}return n}_compileMaterial(e){const t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,Yn)}_sceneToCubeUV(e,t,i,n){const o=new pt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ls),h.toneMapping=0,h.autoClear=!1;const m=new Yt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Ie(new kt,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Ls),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(o.up.set(0,l[M],0),o.lookAt(c[M],0,0)):S===1?(o.up.set(0,0,l[M]),o.lookAt(0,c[M],0)):(o.up.set(0,l[M],0),o.lookAt(0,0,c[M]));const x=this._cubeSize;pn(n,S*x,M>2?x:0,x,x),h.setRenderTarget(n),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Is()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fs());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;pn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Yn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Ds[(n-1)%Ds.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ie(this._lodPlanes[n],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ni-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):ni;f>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ni}`);const M=[];let S=0;for(let P=0;P<ni;++P){const _=P/p,E=Math.exp(-_*_/2);M.push(E),P===0?S+=E:P<f&&(S+=2*E)}for(let P=0;P<M.length;P++)M[P]=M[P]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=M,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const y=this._sizeLods[n],C=3*y*(n>x-Mi?n-x+Mi:0),A=4*(this._cubeSize-y);pn(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(d,Yn)}}function uc(r){const e=[],t=[],i=[];let n=r;const s=r-Mi+1+As.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-Mi?l=As[a-r+Mi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,M=1,S=new Float32Array(p*g*m),x=new Float32Array(f*g*m),y=new Float32Array(M*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,_=A>2?0:-1,E=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];S.set(E,p*g*A),x.set(u,f*g*A);const D=[A,A,A,A,A,A];y.set(D,M*g*A)}const C=new Qe;C.setAttribute("position",new Je(S,p)),C.setAttribute("uv",new Je(x,f)),C.setAttribute("faceIndex",new Je(y,M)),e.push(C),n>Mi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rs(r,e,t){const i=new ri(r,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function dc(r,e,t){const i=new Float32Array(ni),n=new T(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fs(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Is(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fc(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ps(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&n(d)){t===null&&(t=new Ps(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function pc(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function mc(r,e,t,i){const n={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,M=p.length;f<M;f++)e.update(p[f],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let x=0,y=S.length;x<y;x+=3){const C=S[x+0],A=S[x+1],P=S[x+2];u.push(C,A,A,P,P,C)}}else{const S=g.array;p=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const C=x+0,A=x+1,P=x+2;u.push(C,A,A,P,P,C)}}const f=new(hr(u)?_r:gr)(u,1);f.version=p;const M=s.get(d);M&&e.remove(M),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function gc(r,e,t,i){const n=i.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){r.drawElements(s,m,o,u*l),t.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(n)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,u*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function _c(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function xc(r,e){return r[0]-e[0]}function vc(r,e){return Math.abs(e[1])-Math.abs(r[1])}function yc(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new Ue,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let k=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],_=h.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),C===!0&&(E=3);let D=h.attributes.position.count*E,H=1;D>e.maxTextureSize&&(H=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*H*4*p),B=new fr(O,D,H,p);B.type=1015,B.needsUpdate=!0;const R=E*4;for(let Y=0;Y<p;Y++){const K=A[Y],q=P[Y],J=_[Y],j=D*H*4*Y;for(let fe=0;fe<K.count;fe++){const U=fe*R;x===!0&&(a.fromBufferAttribute(K,fe),O[j+U+0]=a.x,O[j+U+1]=a.y,O[j+U+2]=a.z,O[j+U+3]=0),y===!0&&(a.fromBufferAttribute(q,fe),O[j+U+4]=a.x,O[j+U+5]=a.y,O[j+U+6]=a.z,O[j+U+7]=0),C===!0&&(a.fromBufferAttribute(J,fe),O[j+U+8]=a.x,O[j+U+9]=a.y,O[j+U+10]=a.z,O[j+U+11]=J.itemSize===4?a.w:1)}}f={count:p,texture:B,size:new Me(D,H)},s.set(h,f),h.addEventListener("dispose",k)}let M=0;for(let x=0;x<u.length;x++)M+=u[x];const S=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let p=i[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];i[h.id]=p}for(let y=0;y<g;y++){const C=p[y];C[0]=y,C[1]=u[y]}p.sort(vc);for(let y=0;y<8;y++)y<g&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(xc);const f=h.morphAttributes.position,M=h.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const C=o[y],A=C[0],P=C[1];A!==Number.MAX_SAFE_INTEGER&&P?(f&&h.getAttribute("morphTarget"+y)!==f[A]&&h.setAttribute("morphTarget"+y,f[A]),M&&h.getAttribute("morphNormal"+y)!==M[A]&&h.setAttribute("morphNormal"+y,M[A]),n[y]=P,S+=P):(f&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),M&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}const x=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Mc(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);return n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const wr=new ht,br=new fr,Er=new oo,Tr=new yr,zs=[],Bs=[],Us=new Float32Array(16),Gs=new Float32Array(9),Ns=new Float32Array(4);function Ai(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=zs[n];if(s===void 0&&(s=new Float32Array(n),zs[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Xe(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Ye(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function wn(r,e){let t=Bs[e];t===void 0&&(t=new Int32Array(e),Bs[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Sc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;r.uniform2fv(this.addr,e),Ye(t,e)}}function bc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xe(t,e))return;r.uniform3fv(this.addr,e),Ye(t,e)}}function Ec(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;r.uniform4fv(this.addr,e),Ye(t,e)}}function Tc(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,i))return;Ns.set(i),r.uniformMatrix2fv(this.addr,!1,Ns),Ye(t,i)}}function Cc(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,i))return;Gs.set(i),r.uniformMatrix3fv(this.addr,!1,Gs),Ye(t,i)}}function Ac(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,i))return;Us.set(i),r.uniformMatrix4fv(this.addr,!1,Us),Ye(t,i)}}function Lc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Dc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;r.uniform2iv(this.addr,e),Ye(t,e)}}function Pc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;r.uniform3iv(this.addr,e),Ye(t,e)}}function Rc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;r.uniform4iv(this.addr,e),Ye(t,e)}}function Fc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ic(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;r.uniform2uiv(this.addr,e),Ye(t,e)}}function zc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;r.uniform3uiv(this.addr,e),Ye(t,e)}}function Bc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;r.uniform4uiv(this.addr,e),Ye(t,e)}}function Uc(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||wr,n)}function Gc(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Er,n)}function Nc(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Tr,n)}function Oc(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||br,n)}function kc(r){switch(r){case 5126:return Sc;case 35664:return wc;case 35665:return bc;case 35666:return Ec;case 35674:return Tc;case 35675:return Cc;case 35676:return Ac;case 5124:case 35670:return Lc;case 35667:case 35671:return Dc;case 35668:case 35672:return Pc;case 35669:case 35673:return Rc;case 5125:return Fc;case 36294:return Ic;case 36295:return zc;case 36296:return Bc;case 35678:case 36198:case 36298:case 36306:case 35682:return Uc;case 35679:case 36299:case 36307:return Gc;case 35680:case 36300:case 36308:case 36293:return Nc;case 36289:case 36303:case 36311:case 36292:return Oc}}function Vc(r,e){r.uniform1fv(this.addr,e)}function Wc(r,e){const t=Ai(e,this.size,2);r.uniform2fv(this.addr,t)}function Hc(r,e){const t=Ai(e,this.size,3);r.uniform3fv(this.addr,t)}function qc(r,e){const t=Ai(e,this.size,4);r.uniform4fv(this.addr,t)}function Xc(r,e){const t=Ai(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Yc(r,e){const t=Ai(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jc(r,e){const t=Ai(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $c(r,e){r.uniform1iv(this.addr,e)}function Zc(r,e){r.uniform2iv(this.addr,e)}function Kc(r,e){r.uniform3iv(this.addr,e)}function Jc(r,e){r.uniform4iv(this.addr,e)}function Qc(r,e){r.uniform1uiv(this.addr,e)}function eh(r,e){r.uniform2uiv(this.addr,e)}function th(r,e){r.uniform3uiv(this.addr,e)}function ih(r,e){r.uniform4uiv(this.addr,e)}function nh(r,e,t){const i=this.cache,n=e.length,s=wn(t,n);Xe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||wr,s[a])}function sh(r,e,t){const i=this.cache,n=e.length,s=wn(t,n);Xe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Er,s[a])}function rh(r,e,t){const i=this.cache,n=e.length,s=wn(t,n);Xe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Tr,s[a])}function oh(r,e,t){const i=this.cache,n=e.length,s=wn(t,n);Xe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||br,s[a])}function ah(r){switch(r){case 5126:return Vc;case 35664:return Wc;case 35665:return Hc;case 35666:return qc;case 35674:return Xc;case 35675:return Yc;case 35676:return jc;case 5124:case 35670:return $c;case 35667:case 35671:return Zc;case 35668:case 35672:return Kc;case 35669:case 35673:return Jc;case 5125:return Qc;case 36294:return eh;case 36295:return th;case 36296:return ih;case 35678:case 36198:case 36298:case 36306:case 35682:return nh;case 35679:case 36299:case 36307:return sh;case 35680:case 36300:case 36308:case 36293:return rh;case 36289:case 36303:case 36311:case 36292:return oh}}class lh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=kc(t.type)}}class ch{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ah(t.type)}}class hh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const $n=/(\w+)(\])?(\[|\.)?/g;function Os(r,e){r.seq.push(e),r.map[e.id]=e}function uh(r,e,t){const i=r.name,n=i.length;for($n.lastIndex=0;;){const s=$n.exec(i),a=$n.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Os(t,c===void 0?new lh(o,r,e):new ch(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new hh(o),Os(t,d)),t=d}}}class xn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);uh(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function ks(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let dh=0;function fh(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ph(r){switch(r){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Vs(r,e,t){const i=r.getShaderParameter(e,35713),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+fh(r.getShaderSource(e),a)}else return n}function mh(r,e){const t=ph(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gh(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _h(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function xh(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vh(r,e){const t={},i=r.getProgramParameter(e,35721);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ni(r){return r!==""}function Ws(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hs(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yh=/^[ \t]*#include +<([\w\d./]+)>/gm;function ts(r){return r.replace(yh,Mh)}function Mh(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ts(t)}const Sh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qs(r){return r.replace(Sh,wh)}function wh(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Xs(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bh(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Eh(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Th(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Ch(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Ah(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Lh(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bh(t),c=Eh(t),h=Th(t),d=Ch(t),u=Ah(t),m=t.isWebGL2?"":_h(t),g=xh(s),p=n.createProgram();let f,M,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Ni).join(`
`),f.length>0&&(f+=`
`),M=[m,g].filter(Ni).join(`
`),M.length>0&&(M+=`
`)):(f=[Xs(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),M=[m,Xs(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?we.tonemapping_pars_fragment:"",t.toneMapping!==0?gh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,mh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),a=ts(a),a=Ws(a,t),a=Hs(a,t),o=ts(o),o=Ws(o,t),o=Hs(o,t),a=qs(a),o=qs(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["#define varying in",t.glslVersion===ms?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ms?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const x=S+f+a,y=S+M+o,C=ks(n,35633,x),A=ks(n,35632,y);if(n.attachShader(p,C),n.attachShader(p,A),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),r.debug.checkShaderErrors){const E=n.getProgramInfoLog(p).trim(),D=n.getShaderInfoLog(C).trim(),H=n.getShaderInfoLog(A).trim();let O=!0,B=!0;if(n.getProgramParameter(p,35714)===!1){O=!1;const R=Vs(n,C,"vertex"),k=Vs(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+R+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||H==="")&&(B=!1);B&&(this.diagnostics={runnable:O,programLog:E,vertexShader:{log:D,prefix:f},fragmentShader:{log:H,prefix:M}})}n.deleteShader(C),n.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new xn(n,p)),P};let _;return this.getAttributes=function(){return _===void 0&&(_=vh(n,p)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=dh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Dh=0;class Ph{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rh(e),t.set(e,i)),i}}class Rh{constructor(e){this.id=Dh++,this.code=e,this.usedTimes=0}}function Fh(r,e,t,i,n,s,a){const o=new pr,l=new Ph,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,E,D,H,O){const B=H.fog,R=O.geometry,k=_.isMeshStandardMaterial?H.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||k),K=Y&&Y.mapping===306?Y.image.height:null,q=g[_.type];_.precision!==null&&(m=n.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=J!==void 0?J.length:0;let fe=0;R.morphAttributes.position!==void 0&&(fe=1),R.morphAttributes.normal!==void 0&&(fe=2),R.morphAttributes.color!==void 0&&(fe=3);let U,Z,ie,z;if(q){const Ee=Rt[q];U=Ee.vertexShader,Z=Ee.fragmentShader}else U=_.vertexShader,Z=_.fragmentShader,l.update(_),ie=l.getVertexShaderID(_),z=l.getFragmentShaderID(_);const le=r.getRenderTarget(),oe=_.alphaTest>0,ce=_.clearcoat>0,he=_.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:_.type,vertexShader:U,fragmentShader:Z,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:u,outputEncoding:le===null?r.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:3e3,map:!!_.map,matcap:!!_.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===1,tangentSpaceNormalMap:_.normalMapType===0,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===3001,clearcoat:ce,clearcoatMap:ce&&!!_.clearcoatMap,clearcoatRoughnessMap:ce&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!_.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!_.iridescenceMap,iridescenceThicknessMap:he&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===1,alphaMap:!!_.alphaMap,alphaTest:oe,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!R.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!B,useFog:_.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:0,useLegacyLights:r.useLegacyLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===2,flipSided:_.side===1,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)E.push(D),E.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(M(E,_),S(E,_),E.push(r.outputEncoding)),E.push(_.customProgramCacheKey),E.join()}function M(_,E){_.push(E.precision),_.push(E.outputEncoding),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.combine),_.push(E.vertexUvs),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),_.push(o.mask)}function x(_){const E=g[_.type];let D;if(E){const H=Rt[E];D=vo.clone(H.uniforms)}else D=_.uniforms;return D}function y(_,E){let D;for(let H=0,O=c.length;H<O;H++){const B=c[H];if(B.cacheKey===E){D=B,++D.usedTimes;break}}return D===void 0&&(D=new Lh(r,E,_,s),c.push(D)),D}function C(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:P}}function Ih(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function zh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ys(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function js(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(d,u,m,g,p,f){let M=r[e];return M===void 0?(M={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},r[e]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=m,M.groupOrder=g,M.renderOrder=d.renderOrder,M.z=p,M.group=f),e++,M}function o(d,u,m,g,p,f){const M=a(d,u,m,g,p,f);m.transmission>0?i.push(M):m.transparent===!0?n.push(M):t.push(M)}function l(d,u,m,g,p,f){const M=a(d,u,m,g,p,f);m.transmission>0?i.unshift(M):m.transparent===!0?n.unshift(M):t.unshift(M)}function c(d,u){t.length>1&&t.sort(d||zh),i.length>1&&i.sort(u||Ys),n.length>1&&n.sort(u||Ys)}function h(){for(let d=e,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Bh(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new js,r.set(i,[a])):n>=s.length?(a=new js,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Uh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function Gh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Nh=0;function Oh(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kh(r,e){const t=new Uh,i=Gh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new T);const s=new T,a=new Be,o=new Be;function l(h,d){let u=0,m=0,g=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,f=0,M=0,S=0,x=0,y=0,C=0,A=0,P=0,_=0;h.sort(Oh);const E=d===!0?Math.PI:1;for(let H=0,O=h.length;H<O;H++){const B=h[H],R=B.color,k=B.intensity,Y=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=R.r*k*E,m+=R.g*k*E,g+=R.b*k*E;else if(B.isLightProbe)for(let q=0;q<9;q++)n.probe[q].addScaledVector(B.sh.coefficients[q],k);else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*E),B.castShadow){const J=B.shadow,j=i.get(B);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=B.shadow.matrix,y++}n.directional[p]=q,p++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(R).multiplyScalar(k*E),q.distance=Y,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,n.spot[M]=q;const J=B.shadow;if(B.map&&(n.spotLightMap[P]=B.map,P++,J.updateMatrices(B),B.castShadow&&_++),n.spotLightMatrix[M]=J.matrix,B.castShadow){const j=i.get(B);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=K,A++}M++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(R).multiplyScalar(k),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),n.rectArea[S]=q,S++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*E),q.distance=B.distance,q.decay=B.decay,B.castShadow){const J=B.shadow,j=i.get(B);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=K,n.pointShadowMatrix[f]=B.shadow.matrix,C++}n.point[f]=q,f++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(k*E),q.groundColor.copy(B.groundColor).multiplyScalar(k*E),n.hemi[x]=q,x++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=g;const D=n.hash;(D.directionalLength!==p||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==S||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==C||D.numSpotShadows!==A||D.numSpotMaps!==P)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=S,n.point.length=f,n.hemi.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=A+P-_,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=_,D.directionalLength=p,D.pointLength=f,D.spotLength=M,D.rectAreaLength=S,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=C,D.numSpotShadows=A,D.numSpotMaps=P,n.version=Nh++)}function c(h,d){let u=0,m=0,g=0,p=0,f=0;const M=d.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const y=h[S];if(y.isDirectionalLight){const C=n.directional[u];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(M),u++}else if(y.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(M),g++}else if(y.isRectAreaLight){const C=n.rectArea[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(M),o.identity(),a.copy(y.matrixWorld),a.premultiply(M),o.extractRotation(a),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(M),m++}else if(y.isHemisphereLight){const C=n.hemi[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(M),f++}}}return{setup:l,setupView:c,state:n}}function $s(r,e){const t=new kh(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function a(d){i.push(d)}function o(d){n.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Vh(r,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new $s(r,e),t.set(s,[l])):a>=o.length?(l=new $s(r,e),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Wh extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hh extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yh(r,e,t){let i=new os;const n=new Me,s=new Me,a=new Ue,o=new Wh({depthPacking:3201}),l=new Hh,c={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:qh,fragmentShader:Xh}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ie(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(y,C,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const P=r.getRenderTarget(),_=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),D=r.state;D.setBlending(0),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let H=0,O=y.length;H<O;H++){const B=y[H],R=B.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);const k=R.getFrameExtents();if(n.multiply(k),s.copy(R.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/k.x),n.x=s.x*k.x,R.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/k.y),n.y=s.y*k.y,R.mapSize.y=s.y)),R.map===null){const K=this.type!==3?{minFilter:1003,magFilter:1003}:{};R.map=new ri(n.x,n.y,K),R.map.texture.name=B.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const Y=R.getViewportCount();for(let K=0;K<Y;K++){const q=R.getViewport(K);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(a),R.updateMatrices(B,K),i=R.getFrustum(),x(C,A,R.camera,B,this.type)}R.isPointLightShadow!==!0&&this.type===3&&M(R,A),R.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(P,_,E)};function M(y,C){const A=e.update(p);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ri(n.x,n.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(C,null,A,u,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(C,null,A,m,p,null)}function S(y,C,A,P,_,E){let D=null;const H=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(H!==void 0)D=H;else if(D=A.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=D.uuid,B=C.uuid;let R=c[O];R===void 0&&(R={},c[O]=R);let k=R[B];k===void 0&&(k=D.clone(),R[B]=k),D=k}return D.visible=C.visible,D.wireframe=C.wireframe,E===3?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=P,D.farDistance=_),D}function x(y,C,A,P,_){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===3)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const H=e.update(y),O=y.material;if(Array.isArray(O)){const B=H.groups;for(let R=0,k=B.length;R<k;R++){const Y=B[R],K=O[Y.materialIndex];if(K&&K.visible){const q=S(y,K,P,A.near,A.far,_);r.renderBufferDirect(A,null,H,q,y,Y)}}}else if(O.visible){const B=S(y,O,P,A.near,A.far,_);r.renderBufferDirect(A,null,H,B,y,null)}}const D=y.children;for(let H=0,O=D.length;H<O;H++)x(D[H],C,A,P,_)}}function jh(r,e,t){const i=t.isWebGL2;function n(){let L=!1;const N=new Ue;let $=null;const se=new Ue(0,0,0,0);return{setMask:function(ae){$!==ae&&!L&&(r.colorMask(ae,ae,ae,ae),$=ae)},setLocked:function(ae){L=ae},setClear:function(ae,ze,$e,rt,At){At===!0&&(ae*=rt,ze*=rt,$e*=rt),N.set(ae,ze,$e,rt),se.equals(N)===!1&&(r.clearColor(ae,ze,$e,rt),se.copy(N))},reset:function(){L=!1,$=null,se.set(-1,0,0,0)}}}function s(){let L=!1,N=null,$=null,se=null;return{setTest:function(ae){ae?oe(2929):ce(2929)},setMask:function(ae){N!==ae&&!L&&(r.depthMask(ae),N=ae)},setFunc:function(ae){if($!==ae){switch(ae){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517);break;default:r.depthFunc(515)}$=ae}},setLocked:function(ae){L=ae},setClear:function(ae){se!==ae&&(r.clearDepth(ae),se=ae)},reset:function(){L=!1,N=null,$=null,se=null}}}function a(){let L=!1,N=null,$=null,se=null,ae=null,ze=null,$e=null,rt=null,At=null;return{setTest:function(Ve){L||(Ve?oe(2960):ce(2960))},setMask:function(Ve){N!==Ve&&!L&&(r.stencilMask(Ve),N=Ve)},setFunc:function(Ve,vt,Lt){($!==Ve||se!==vt||ae!==Lt)&&(r.stencilFunc(Ve,vt,Lt),$=Ve,se=vt,ae=Lt)},setOp:function(Ve,vt,Lt){(ze!==Ve||$e!==vt||rt!==Lt)&&(r.stencilOp(Ve,vt,Lt),ze=Ve,$e=vt,rt=Lt)},setLocked:function(Ve){L=Ve},setClear:function(Ve){At!==Ve&&(r.clearStencil(Ve),At=Ve)},reset:function(){L=!1,N=null,$=null,se=null,ae=null,ze=null,$e=null,rt=null,At=null}}}const o=new n,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,M=!1,S=null,x=null,y=null,C=null,A=null,P=null,_=null,E=!1,D=null,H=null,O=null,B=null,R=null;const k=r.getParameter(35661);let Y=!1,K=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=K>=2);let J=null,j={};const fe=r.getParameter(3088),U=r.getParameter(2978),Z=new Ue().fromArray(fe),ie=new Ue().fromArray(U);function z(L,N,$){const se=new Uint8Array(4),ae=r.createTexture();r.bindTexture(L,ae),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let ze=0;ze<$;ze++)r.texImage2D(N+ze,0,6408,1,1,0,6408,5121,se);return ae}const le={};le[3553]=z(3553,3553,1),le[34067]=z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(2929),l.setFunc(3),ut(!1),st(1),oe(2884),nt(0);function oe(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function ce(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function he(L,N){return m[L]!==N?(r.bindFramebuffer(L,N),m[L]=N,i&&(L===36009&&(m[36160]=N),L===36160&&(m[36009]=N)),!0):!1}function _e(L,N){let $=p,se=!1;if(L)if($=g.get(N),$===void 0&&($=[],g.set(N,$)),L.isWebGLMultipleRenderTargets){const ae=L.texture;if($.length!==ae.length||$[0]!==36064){for(let ze=0,$e=ae.length;ze<$e;ze++)$[ze]=36064+ze;$.length=ae.length,se=!0}}else $[0]!==36064&&($[0]=36064,se=!0);else $[0]!==1029&&($[0]=1029,se=!0);se&&(t.isWebGL2?r.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ee(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const Ce={100:32774,101:32778,102:32779};if(i)Ce[103]=32775,Ce[104]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ce[103]=L.MIN_EXT,Ce[104]=L.MAX_EXT)}const Fe={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function nt(L,N,$,se,ae,ze,$e,rt){if(L===0){M===!0&&(ce(3042),M=!1);return}if(M===!1&&(oe(3042),M=!0),L!==5){if(L!==S||rt!==E){if((x!==100||A!==100)&&(r.blendEquation(32774),x=100,A=100),rt)switch(L){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,P=null,_=null,S=L,E=rt}return}ae=ae||N,ze=ze||$,$e=$e||se,(N!==x||ae!==A)&&(r.blendEquationSeparate(Ce[N],Ce[ae]),x=N,A=ae),($!==y||se!==C||ze!==P||$e!==_)&&(r.blendFuncSeparate(Fe[$],Fe[se],Fe[ze],Fe[$e]),y=$,C=se,P=ze,_=$e),S=L,E=!1}function Mt(L,N){L.side===2?ce(2884):oe(2884);let $=L.side===1;N&&($=!$),ut($),L.blending===1&&L.transparent===!1?nt(0):nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;c.setTest(se),se&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(32926):ce(32926)}function ut(L){D!==L&&(L?r.frontFace(2304):r.frontFace(2305),D=L)}function st(L){L!==0?(oe(2884),L!==H&&(L===1?r.cullFace(1029):L===2?r.cullFace(1028):r.cullFace(1032))):ce(2884),H=L}function ke(L){L!==O&&(Y&&r.lineWidth(L),O=L)}function Ge(L,N,$){L?(oe(32823),(B!==N||R!==$)&&(r.polygonOffset(N,$),B=N,R=$)):ce(32823)}function Ct(L){L?oe(3089):ce(3089)}function St(L){L===void 0&&(L=33984+k-1),J!==L&&(r.activeTexture(L),J=L)}function b(L,N,$){$===void 0&&(J===null?$=33984+k-1:$=J);let se=j[$];se===void 0&&(se={type:void 0,texture:void 0},j[$]=se),(se.type!==L||se.texture!==N)&&(J!==$&&(r.activeTexture($),J=$),r.bindTexture(L,N||le[L]),se.type=L,se.texture=N)}function v(){const L=j[J];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){Z.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function de(L){ie.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Pe(L,N){let $=d.get(N);$===void 0&&($=new WeakMap,d.set(N,$));let se=$.get(L);se===void 0&&(se=r.getUniformBlockIndex(N,L.name),$.set(L,se))}function Ne(L,N){const se=d.get(N).get(L);h.get(N)!==se&&(r.uniformBlockBinding(N,se,L.__bindingPointIndex),h.set(N,se))}function je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),i===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,j={},m={},g=new WeakMap,p=[],f=null,M=!1,S=null,x=null,y=null,C=null,A=null,P=null,_=null,E=!1,D=null,H=null,O=null,B=null,R=null,Z.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:oe,disable:ce,bindFramebuffer:he,drawBuffers:_e,useProgram:Ee,setBlending:nt,setMaterial:Mt,setFlipSided:ut,setCullFace:st,setLineWidth:ke,setPolygonOffset:Ge,setScissorTest:Ct,activeTexture:St,bindTexture:b,unbindTexture:v,compressedTexImage2D:V,compressedTexImage3D:Q,texImage2D:ue,texImage3D:ve,updateUBOMapping:Pe,uniformBlockBinding:Ne,texStorage2D:X,texStorage3D:xe,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:pe,compressedTexSubImage3D:re,scissor:ge,viewport:de,reset:je}}function $h(r,e,t,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,d=n.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,v){return M?new OffscreenCanvas(b,v):qi("canvas")}function x(b,v,V,Q){let ee=1;if((b.width>Q||b.height>Q)&&(ee=Q/Math.max(b.width,b.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=v?cr:Math.floor,pe=ne(ee*b.width),re=ne(ee*b.height);p===void 0&&(p=S(pe,re));const X=V?S(pe,re):p;return X.width=pe,X.height=re,X.getContext("2d").drawImage(b,0,0,pe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+pe+"x"+re+")."),X}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return es(b.width)&&es(b.height)}function C(b){return o?!1:b.wrapS!==1001||b.wrapT!==1001||b.minFilter!==1003&&b.minFilter!==1006}function A(b,v){return b.generateMipmaps&&v&&b.minFilter!==1003&&b.minFilter!==1006}function P(b){r.generateMipmap(b)}function _(b,v,V,Q,ee=!1){if(o===!1)return v;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=v;return v===6403&&(V===5126&&(ne=33326),V===5131&&(ne=33325),V===5121&&(ne=33321)),v===33319&&(V===5126&&(ne=33328),V===5131&&(ne=33327),V===5121&&(ne=33323)),v===6408&&(V===5126&&(ne=34836),V===5131&&(ne=34842),V===5121&&(ne=Q===3001&&ee===!1?35907:32856),V===32819&&(ne=32854),V===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function E(b,v,V){return A(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function D(b){return b===1003||b===1004||b===1005?9728:9729}function H(b){const v=b.target;v.removeEventListener("dispose",H),B(v),v.isVideoTexture&&g.delete(v)}function O(b){const v=b.target;v.removeEventListener("dispose",O),k(v)}function B(b){const v=i.get(b);if(v.__webglInit===void 0)return;const V=b.source,Q=f.get(V);if(Q){const ee=Q[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(b),Object.keys(Q).length===0&&f.delete(V)}i.remove(b)}function R(b){const v=i.get(b);r.deleteTexture(v.__webglTexture);const V=b.source,Q=f.get(V);delete Q[v.__cacheKey],a.memory.textures--}function k(b){const v=b.texture,V=i.get(b),Q=i.get(v);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)r.deleteFramebuffer(V.__webglFramebuffer[ee]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ee]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ne=v.length;ee<ne;ee++){const pe=i.get(v[ee]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(v[ee])}i.remove(v),i.remove(b)}let Y=0;function K(){Y=0}function q(){const b=Y;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Y+=1,b}function J(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.encoding),v.join()}function j(b,v){const V=i.get(b);if(b.isVideoTexture&&Ct(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,b,v);return}}t.bindTexture(3553,V.__webglTexture,33984+v)}function fe(b,v){const V=i.get(b);if(b.version>0&&V.__version!==b.version){ce(V,b,v);return}t.bindTexture(35866,V.__webglTexture,33984+v)}function U(b,v){const V=i.get(b);if(b.version>0&&V.__version!==b.version){ce(V,b,v);return}t.bindTexture(32879,V.__webglTexture,33984+v)}function Z(b,v){const V=i.get(b);if(b.version>0&&V.__version!==b.version){he(V,b,v);return}t.bindTexture(34067,V.__webglTexture,33984+v)}const ie={1e3:10497,1001:33071,1002:33648},z={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function le(b,v,V){if(V?(r.texParameteri(b,10242,ie[v.wrapS]),r.texParameteri(b,10243,ie[v.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,ie[v.wrapR]),r.texParameteri(b,10240,z[v.magFilter]),r.texParameteri(b,10241,z[v.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(v.wrapS!==1001||v.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,D(v.magFilter)),r.texParameteri(b,10241,D(v.minFilter)),v.minFilter!==1003&&v.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(r.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function oe(b,v){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",H));const Q=v.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const ne=J(v);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[ne].usedTimes++;const pe=ee[b.__cacheKey];pe!==void 0&&(ee[b.__cacheKey].usedTimes--,pe.usedTimes===0&&R(v)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return V}function ce(b,v,V){let Q=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=35866),v.isData3DTexture&&(Q=32879);const ee=oe(b,v),ne=v.source;t.bindTexture(Q,b.__webglTexture,33984+V);const pe=i.get(ne);if(ne.version!==pe.__version||ee===!0){t.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const re=C(v)&&y(v.image)===!1;let X=x(v.image,re,!1,h);X=St(v,X);const xe=y(X)||o,ue=s.convert(v.format,v.encoding);let ve=s.convert(v.type),ge=_(v.internalFormat,ue,ve,v.encoding,v.isVideoTexture);le(Q,v,xe);let de;const Pe=v.mipmaps,Ne=o&&v.isVideoTexture!==!0,je=pe.__version===void 0||ee===!0,L=E(v,X,xe);if(v.isDepthTexture)ge=6402,o?v.type===1015?ge=36012:v.type===1014?ge=33190:v.type===1020?ge=35056:ge=33189:v.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===1026&&ge===6402&&v.type!==1012&&v.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=1014,ve=s.convert(v.type)),v.format===1027&&ge===6402&&(ge=34041,v.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=1020,ve=s.convert(v.type))),je&&(Ne?t.texStorage2D(3553,1,ge,X.width,X.height):t.texImage2D(3553,0,ge,X.width,X.height,0,ue,ve,null));else if(v.isDataTexture)if(Pe.length>0&&xe){Ne&&je&&t.texStorage2D(3553,L,ge,Pe[0].width,Pe[0].height);for(let N=0,$=Pe.length;N<$;N++)de=Pe[N],Ne?t.texSubImage2D(3553,N,0,0,de.width,de.height,ue,ve,de.data):t.texImage2D(3553,N,ge,de.width,de.height,0,ue,ve,de.data);v.generateMipmaps=!1}else Ne?(je&&t.texStorage2D(3553,L,ge,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,ue,ve,X.data)):t.texImage2D(3553,0,ge,X.width,X.height,0,ue,ve,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&je&&t.texStorage3D(35866,L,ge,Pe[0].width,Pe[0].height,X.depth);for(let N=0,$=Pe.length;N<$;N++)de=Pe[N],v.format!==1023?ue!==null?Ne?t.compressedTexSubImage3D(35866,N,0,0,0,de.width,de.height,X.depth,ue,de.data,0,0):t.compressedTexImage3D(35866,N,ge,de.width,de.height,X.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,N,0,0,0,de.width,de.height,X.depth,ue,ve,de.data):t.texImage3D(35866,N,ge,de.width,de.height,X.depth,0,ue,ve,de.data)}else{Ne&&je&&t.texStorage2D(3553,L,ge,Pe[0].width,Pe[0].height);for(let N=0,$=Pe.length;N<$;N++)de=Pe[N],v.format!==1023?ue!==null?Ne?t.compressedTexSubImage2D(3553,N,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(3553,N,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,N,0,0,de.width,de.height,ue,ve,de.data):t.texImage2D(3553,N,ge,de.width,de.height,0,ue,ve,de.data)}else if(v.isDataArrayTexture)Ne?(je&&t.texStorage3D(35866,L,ge,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,ue,ve,X.data)):t.texImage3D(35866,0,ge,X.width,X.height,X.depth,0,ue,ve,X.data);else if(v.isData3DTexture)Ne?(je&&t.texStorage3D(32879,L,ge,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,ue,ve,X.data)):t.texImage3D(32879,0,ge,X.width,X.height,X.depth,0,ue,ve,X.data);else if(v.isFramebufferTexture){if(je)if(Ne)t.texStorage2D(3553,L,ge,X.width,X.height);else{let N=X.width,$=X.height;for(let se=0;se<L;se++)t.texImage2D(3553,se,ge,N,$,0,ue,ve,null),N>>=1,$>>=1}}else if(Pe.length>0&&xe){Ne&&je&&t.texStorage2D(3553,L,ge,Pe[0].width,Pe[0].height);for(let N=0,$=Pe.length;N<$;N++)de=Pe[N],Ne?t.texSubImage2D(3553,N,0,0,ue,ve,de):t.texImage2D(3553,N,ge,ue,ve,de);v.generateMipmaps=!1}else Ne?(je&&t.texStorage2D(3553,L,ge,X.width,X.height),t.texSubImage2D(3553,0,0,0,ue,ve,X)):t.texImage2D(3553,0,ge,ue,ve,X);A(v,xe)&&P(Q),pe.__version=ne.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function he(b,v,V){if(v.image.length!==6)return;const Q=oe(b,v),ee=v.source;t.bindTexture(34067,b.__webglTexture,33984+V);const ne=i.get(ee);if(ee.version!==ne.__version||Q===!0){t.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const pe=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,X=[];for(let N=0;N<6;N++)!pe&&!re?X[N]=x(v.image[N],!1,!0,c):X[N]=re?v.image[N].image:v.image[N],X[N]=St(v,X[N]);const xe=X[0],ue=y(xe)||o,ve=s.convert(v.format,v.encoding),ge=s.convert(v.type),de=_(v.internalFormat,ve,ge,v.encoding),Pe=o&&v.isVideoTexture!==!0,Ne=ne.__version===void 0||Q===!0;let je=E(v,xe,ue);le(34067,v,ue);let L;if(pe){Pe&&Ne&&t.texStorage2D(34067,je,de,xe.width,xe.height);for(let N=0;N<6;N++){L=X[N].mipmaps;for(let $=0;$<L.length;$++){const se=L[$];v.format!==1023?ve!==null?Pe?t.compressedTexSubImage2D(34069+N,$,0,0,se.width,se.height,ve,se.data):t.compressedTexImage2D(34069+N,$,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+N,$,0,0,se.width,se.height,ve,ge,se.data):t.texImage2D(34069+N,$,de,se.width,se.height,0,ve,ge,se.data)}}}else{L=v.mipmaps,Pe&&Ne&&(L.length>0&&je++,t.texStorage2D(34067,je,de,X[0].width,X[0].height));for(let N=0;N<6;N++)if(re){Pe?t.texSubImage2D(34069+N,0,0,0,X[N].width,X[N].height,ve,ge,X[N].data):t.texImage2D(34069+N,0,de,X[N].width,X[N].height,0,ve,ge,X[N].data);for(let $=0;$<L.length;$++){const ae=L[$].image[N].image;Pe?t.texSubImage2D(34069+N,$+1,0,0,ae.width,ae.height,ve,ge,ae.data):t.texImage2D(34069+N,$+1,de,ae.width,ae.height,0,ve,ge,ae.data)}}else{Pe?t.texSubImage2D(34069+N,0,0,0,ve,ge,X[N]):t.texImage2D(34069+N,0,de,ve,ge,X[N]);for(let $=0;$<L.length;$++){const se=L[$];Pe?t.texSubImage2D(34069+N,$+1,0,0,ve,ge,se.image[N]):t.texImage2D(34069+N,$+1,de,ve,ge,se.image[N])}}}A(v,ue)&&P(34067),ne.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function _e(b,v,V,Q,ee){const ne=s.convert(V.format,V.encoding),pe=s.convert(V.type),re=_(V.internalFormat,ne,pe,V.encoding);i.get(v).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,re,v.width,v.height,v.depth,0,ne,pe,null):t.texImage2D(ee,0,re,v.width,v.height,0,ne,pe,null)),t.bindFramebuffer(36160,b),Ge(v)?u.framebufferTexture2DMultisampleEXT(36160,Q,ee,i.get(V).__webglTexture,0,ke(v)):(ee===3553||ee>=34069&&ee<=34074)&&r.framebufferTexture2D(36160,Q,ee,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(b,v,V){if(r.bindRenderbuffer(36161,b),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(V||Ge(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===1015?Q=36012:ee.type===1014&&(Q=33190));const ne=ke(v);Ge(v)?u.renderbufferStorageMultisampleEXT(36161,ne,Q,v.width,v.height):r.renderbufferStorageMultisample(36161,ne,Q,v.width,v.height)}else r.renderbufferStorage(36161,Q,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){const Q=ke(v);V&&Ge(v)===!1?r.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Ge(v)?u.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<Q.length;ee++){const ne=Q[ee],pe=s.convert(ne.format,ne.encoding),re=s.convert(ne.type),X=_(ne.internalFormat,pe,re,ne.encoding),xe=ke(v);V&&Ge(v)===!1?r.renderbufferStorageMultisample(36161,xe,X,v.width,v.height):Ge(v)?u.renderbufferStorageMultisampleEXT(36161,xe,X,v.width,v.height):r.renderbufferStorage(36161,X,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function Ce(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Q=i.get(v.depthTexture).__webglTexture,ee=ke(v);if(v.depthTexture.format===1026)Ge(v)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===1027)Ge(v)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const v=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,b)}else if(V){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ee(v.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Ee(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function nt(b,v,V){const Q=i.get(b);v!==void 0&&_e(Q.__webglFramebuffer,b,b.texture,36064,3553),V!==void 0&&Fe(b)}function Mt(b){const v=b.texture,V=i.get(b),Q=i.get(v);b.addEventListener("dispose",O),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=v.version,a.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,pe=y(b)||o;if(ee){V.__webglFramebuffer=[];for(let re=0;re<6;re++)V.__webglFramebuffer[re]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),ne)if(n.drawBuffers){const re=b.texture;for(let X=0,xe=re.length;X<xe;X++){const ue=i.get(re[X]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Ge(b)===!1){const re=ne?v:[v];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let X=0;X<re.length;X++){const xe=re[X];V.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[X]);const ue=s.convert(xe.format,xe.encoding),ve=s.convert(xe.type),ge=_(xe.internalFormat,ue,ve,xe.encoding,b.isXRRenderTarget===!0),de=ke(b);r.renderbufferStorageMultisample(36161,de,ge,b.width,b.height),r.framebufferRenderbuffer(36160,36064+X,36161,V.__webglColorRenderbuffer[X])}r.bindRenderbuffer(36161,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),le(34067,v,pe);for(let re=0;re<6;re++)_e(V.__webglFramebuffer[re],b,v,36064,34069+re);A(v,pe)&&P(34067),t.unbindTexture()}else if(ne){const re=b.texture;for(let X=0,xe=re.length;X<xe;X++){const ue=re[X],ve=i.get(ue);t.bindTexture(3553,ve.__webglTexture),le(3553,ue,pe),_e(V.__webglFramebuffer,b,ue,36064+X,3553),A(ue,pe)&&P(3553)}t.unbindTexture()}else{let re=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?re=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,Q.__webglTexture),le(re,v,pe),_e(V.__webglFramebuffer,b,v,36064,re),A(v,pe)&&P(re),t.unbindTexture()}b.depthBuffer&&Fe(b)}function ut(b){const v=y(b)||o,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,ee=V.length;Q<ee;Q++){const ne=V[Q];if(A(ne,v)){const pe=b.isWebGLCubeRenderTarget?34067:3553,re=i.get(ne).__webglTexture;t.bindTexture(pe,re),P(pe),t.unbindTexture()}}}function st(b){if(o&&b.samples>0&&Ge(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,Q=b.height;let ee=16384;const ne=[],pe=b.stencilBuffer?33306:36096,re=i.get(b),X=b.isWebGLMultipleRenderTargets===!0;if(X)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,re.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){ne.push(36064+xe),b.depthBuffer&&ne.push(pe);const ue=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ue===!1&&(b.depthBuffer&&(ee|=256),b.stencilBuffer&&(ee|=1024)),X&&r.framebufferRenderbuffer(36008,36064,36161,re.__webglColorRenderbuffer[xe]),ue===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),X){const ve=i.get(v[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ve,0)}r.blitFramebuffer(0,0,V,Q,0,0,V,Q,ee,9728),m&&r.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,re.__webglColorRenderbuffer[xe]);const ue=i.get(v[xe]).__webglTexture;t.bindFramebuffer(36160,re.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,ue,0)}t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}}function ke(b){return Math.min(d,b.samples)}function Ge(b){const v=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(b){const v=a.render.frame;g.get(b)!==v&&(g.set(b,v),b.update())}function St(b,v){const V=b.encoding,Q=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===1035||V!==3e3&&(V===3001?o===!1?e.has("EXT_sRGB")===!0&&Q===1023?(b.format=1035,b.minFilter=1006,b.generateMipmaps=!1):v=ur.sRGBToLinear(v):(Q!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),v}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=fe,this.setTexture3D=U,this.setTextureCube=Z,this.rebindTextures=nt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function Zh(r,e,t){const i=t.isWebGL2;function n(s,a=null){let o;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1035)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===1028)return 6403;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(a===3001)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===37492)return a===3001?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===37496)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===37808)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===36492)return a===3001?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===36283||s===36284||s===36285||s===36286)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(s===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===1020?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class Kh extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oi extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jh={type:"move"};class Zn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i),M=this._getHandJoint(c,p);f!==null&&(M.matrix.fromArray(f.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.jointRadius=f.radius),M.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qh extends ht{constructor(e,t,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1014),i===void 0&&h===1027&&(i=1020),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class eu extends Ti{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const p=t.getContextAttributes();let f=null,M=null;const S=[],x=[],y=new Set,C=new Map,A=new pt;A.layers.enable(1),A.viewport=new Ue;const P=new pt;P.layers.enable(2),P.viewport=new Ue;const _=[A,P],E=new Kh;E.layers.enable(1),E.layers.enable(2);let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=S[U];return Z===void 0&&(Z=new Zn,S[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=S[U];return Z===void 0&&(Z=new Zn,S[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=S[U];return Z===void 0&&(Z=new Zn,S[U]=Z),Z.getHandSpace()};function O(U){const Z=x.indexOf(U.inputSource);if(Z===-1)return;const ie=S[Z];ie!==void 0&&ie.dispatchEvent({type:U.type,data:U.inputSource})}function B(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",R);for(let U=0;U<S.length;U++){const Z=x[U];Z!==null&&(x[U]=null,S[U].disconnect(Z))}D=null,H=null,e.setRenderTarget(f),m=null,u=null,d=null,n=null,M=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(U){if(n=U,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",B),n.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:n.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:m}),M=new ri(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,ie=null,z=null;p.depth&&(z=p.stencil?35056:33190,Z=p.stencil?1027:1026,ie=p.stencil?1020:1014);const le={colorFormat:32856,depthFormat:z,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(le),n.updateRenderState({layers:[u]}),M=new ri(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Qh(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const oe=e.properties.get(M);oe.__ignoreDepthValues=u.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),fe.setContext(n),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(U){for(let Z=0;Z<U.removed.length;Z++){const ie=U.removed[Z],z=x.indexOf(ie);z>=0&&(x[z]=null,S[z].disconnect(ie))}for(let Z=0;Z<U.added.length;Z++){const ie=U.added[Z];let z=x.indexOf(ie);if(z===-1){for(let oe=0;oe<S.length;oe++)if(oe>=x.length){x.push(ie),z=oe;break}else if(x[oe]===null){x[oe]=ie,z=oe;break}if(z===-1)break}const le=S[z];le&&le.connect(ie)}}const k=new T,Y=new T;function K(U,Z,ie){k.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const z=k.distanceTo(Y),le=Z.projectionMatrix.elements,oe=ie.projectionMatrix.elements,ce=le[14]/(le[10]-1),he=le[14]/(le[10]+1),_e=(le[9]+1)/le[5],Ee=(le[9]-1)/le[5],Ce=(le[8]-1)/le[0],Fe=(oe[8]+1)/oe[0],nt=ce*Ce,Mt=ce*Fe,ut=z/(-Ce+Fe),st=ut*-Ce;Z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(st),U.translateZ(ut),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ke=ce+ut,Ge=he+ut,Ct=nt-st,St=Mt+(z-st),b=_e*he/Ge*ke,v=Ee*he/Ge*ke;U.projectionMatrix.makePerspective(Ct,St,b,v,ke,Ge)}function q(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(n===null)return;E.near=P.near=A.near=U.near,E.far=P.far=A.far=U.far,(D!==E.near||H!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,H=E.far);const Z=U.parent,ie=E.cameras;q(E,Z);for(let le=0;le<ie.length;le++)q(ie[le],Z);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),U.matrix.copy(E.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const z=U.children;for(let le=0,oe=z.length;le<oe;le++)z[le].updateMatrixWorld(!0);ie.length===2?K(E,A,P):E.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return y};let J=null;function j(U,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let z=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,z=!0);for(let le=0;le<ie.length;le++){const oe=ie[le];let ce=null;if(m!==null)ce=m.getViewport(oe);else{const _e=d.getViewSubImage(u,oe);ce=_e.viewport,le===0&&(e.setRenderTargetTextures(M,_e.colorTexture,u.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(M))}let he=_[le];he===void 0&&(he=new pt,he.layers.enable(le),he.viewport=new Ue,_[le]=he),he.matrix.fromArray(oe.transform.matrix),he.projectionMatrix.fromArray(oe.projectionMatrix),he.viewport.set(ce.x,ce.y,ce.width,ce.height),le===0&&E.matrix.copy(he.matrix),z===!0&&E.cameras.push(he)}}for(let ie=0;ie<S.length;ie++){const z=x[ie],le=S[ie];z!==null&&le!==void 0&&le.update(z,Z,c||a)}if(J&&J(U,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ie=null;for(const z of y)Z.detectedPlanes.has(z)||(ie===null&&(ie=[]),ie.push(z));if(ie!==null)for(const z of ie)y.delete(z),C.delete(z),i.dispatchEvent({type:"planeremoved",data:z});for(const z of Z.detectedPlanes)if(!y.has(z))y.add(z),C.set(z,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:z});else{const le=C.get(z);z.lastChangedTime>le&&(C.set(z,z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:z}))}}g=null}const fe=new Mr;fe.setAnimationLoop(j),this.setAnimationLoop=function(U){J=U},this.dispose=function(){}}}function tu(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,xr(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,M,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(p,f):f.isMeshToonMaterial?(n(p,f),h(p,f)):f.isMeshPhongMaterial?(n(p,f),c(p,f)):f.isMeshStandardMaterial?(n(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,x)):f.isMeshMatcapMaterial?(n(p,f),m(p,f)):f.isMeshDepthMaterial?n(p,f):f.isMeshDistanceMaterial?(n(p,f),g(p,f)):f.isMeshNormalMaterial?n(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,M,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let x;f.aoMap?x=f.aoMap:f.lightMap&&(x=f.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,M,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===1&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function iu(r,e,t,i){let n={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(S,x){const y=x.program;i.uniformBlockBinding(S,y)}function c(S,x){let y=n[S.id];y===void 0&&(g(S),y=h(S),n[S.id]=y,S.addEventListener("dispose",f));const C=x.program;i.updateUBOMapping(S,C);const A=e.render.frame;s[S.id]!==A&&(u(S),s[S.id]=A)}function h(S){const x=d();S.__bindingPointIndex=x;const y=r.createBuffer(),C=S.__size,A=S.usage;return r.bindBuffer(35345,y),r.bufferData(35345,C,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,y),y}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const x=n[S.id],y=S.uniforms,C=S.__cache;r.bindBuffer(35345,x);for(let A=0,P=y.length;A<P;A++){const _=y[A];if(m(_,A,C)===!0){const E=_.__offset,D=Array.isArray(_.value)?_.value:[_.value];let H=0;for(let O=0;O<D.length;O++){const B=D[O],R=p(B);typeof B=="number"?(_.__data[0]=B,r.bufferSubData(35345,E+H,_.__data)):B.isMatrix3?(_.__data[0]=B.elements[0],_.__data[1]=B.elements[1],_.__data[2]=B.elements[2],_.__data[3]=B.elements[0],_.__data[4]=B.elements[3],_.__data[5]=B.elements[4],_.__data[6]=B.elements[5],_.__data[7]=B.elements[0],_.__data[8]=B.elements[6],_.__data[9]=B.elements[7],_.__data[10]=B.elements[8],_.__data[11]=B.elements[0]):(B.toArray(_.__data,H),H+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,_.__data)}}r.bindBuffer(35345,null)}function m(S,x,y){const C=S.value;if(y[x]===void 0){if(typeof C=="number")y[x]=C;else{const A=Array.isArray(C)?C:[C],P=[];for(let _=0;_<A.length;_++)P.push(A[_].clone());y[x]=P}return!0}else if(typeof C=="number"){if(y[x]!==C)return y[x]=C,!0}else{const A=Array.isArray(y[x])?y[x]:[y[x]],P=Array.isArray(C)?C:[C];for(let _=0;_<A.length;_++){const E=A[_];if(E.equals(P[_])===!1)return E.copy(P[_]),!0}}return!1}function g(S){const x=S.uniforms;let y=0;const C=16;let A=0;for(let P=0,_=x.length;P<_;P++){const E=x[P],D={boundary:0,storage:0},H=Array.isArray(E.value)?E.value:[E.value];for(let O=0,B=H.length;O<B;O++){const R=H[O],k=p(R);D.boundary+=k.boundary,D.storage+=k.storage}if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,P>0){A=y%C;const O=C-A;A!==0&&O-D.boundary<0&&(y+=C-A,E.__offset=y)}y+=D.storage}return A=y%C,A>0&&(y+=C-A),S.__size=y,S.__cache={},this}function p(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function M(){for(const S in n)r.deleteBuffer(n[S]);a=[],n={},s={}}return{bind:l,update:c,dispose:M}}function nu(){const r=qi("canvas");return r.style.display="block",r}function ls(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:nu(),t=r.context!==void 0?r.context:null,i=r.depth!==void 0?r.depth:!0,n=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const p=this;let f=!1,M=0,S=0,x=null,y=-1,C=null;const A=new Ue,P=new Ue;let _=null,E=e.width,D=e.height,H=1,O=null,B=null;const R=new Ue(0,0,E,D),k=new Ue(0,0,E,D);let Y=!1;const K=new os;let q=!1,J=!1,j=null;const fe=new Be,U=new T,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return x===null?H:1}let z=t;function le(w,I){for(let G=0;G<w.length;G++){const F=w[G],W=e.getContext(F,I);if(W!==null)return W}return null}try{const w={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ns}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",de,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),z=le(I,w),z===null)throw le(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,ce,he,_e,Ee,Ce,Fe,nt,Mt,ut,st,ke,Ge,Ct,St,b,v,V,Q,ee,ne,pe,re,X;function xe(){oe=new pc(z),ce=new lc(z,oe,r),oe.init(ce),pe=new Zh(z,oe,ce),he=new jh(z,oe,ce),_e=new _c,Ee=new Ih,Ce=new $h(z,oe,he,Ee,ce,pe,_e),Fe=new hc(p),nt=new fc(p),Mt=new To(z,ce),re=new oc(z,oe,Mt,ce),ut=new mc(z,Mt,_e,re),st=new Mc(z,ut,Mt,_e),Q=new yc(z,ce,Ce),b=new cc(Ee),ke=new Fh(p,Fe,nt,oe,ce,re,b),Ge=new tu(p,Ee),Ct=new Bh,St=new Vh(oe,ce),V=new rc(p,Fe,nt,he,st,h,a),v=new Yh(p,st,ce),X=new iu(z,_e,ce,he),ee=new ac(z,oe,_e,ce),ne=new gc(z,oe,_e,ce),_e.programs=ke.programs,p.capabilities=ce,p.extensions=oe,p.properties=Ee,p.renderLists=Ct,p.shadowMap=v,p.state=he,p.info=_e}xe();const ue=new eu(p,z);this.xr=ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(E,D,!1))},this.getSize=function(w){return w.set(E,D)},this.setSize=function(w,I,G=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,D=I,e.width=Math.floor(w*H),e.height=Math.floor(I*H),G===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(E*H,D*H).floor()},this.setDrawingBufferSize=function(w,I,G){E=w,D=I,H=G,e.width=Math.floor(w*G),e.height=Math.floor(I*G),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,I,G,F){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,I,G,F),he.viewport(A.copy(R).multiplyScalar(H).floor())},this.getScissor=function(w){return w.copy(k)},this.setScissor=function(w,I,G,F){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,I,G,F),he.scissor(P.copy(k).multiplyScalar(H).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){he.setScissorTest(Y=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(w=!0,I=!0,G=!0){let F=0;w&&(F|=16384),I&&(F|=256),G&&(F|=1024),z.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",de,!1),Ct.dispose(),St.dispose(),Ee.dispose(),Fe.dispose(),nt.dispose(),st.dispose(),re.dispose(),X.dispose(),ke.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",$),ue.removeEventListener("sessionend",se),j&&(j.dispose(),j=null),ae.stop()};function ve(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const w=_e.autoReset,I=v.enabled,G=v.autoUpdate,F=v.needsUpdate,W=v.type;xe(),_e.autoReset=w,v.enabled=I,v.autoUpdate=G,v.needsUpdate=F,v.type=W}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){const I=w.target;I.removeEventListener("dispose",Pe),Ne(I)}function Ne(w){je(w),Ee.remove(w)}function je(w){const I=Ee.get(w).programs;I!==void 0&&(I.forEach(function(G){ke.releaseProgram(G)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,G,F,W,me){I===null&&(I=Z);const ye=W.isMesh&&W.matrixWorld.determinant()<0,be=zr(w,I,G,F,W);he.setMaterial(F,ye);let Te=G.index,Re=1;F.wireframe===!0&&(Te=ut.getWireframeAttribute(G),Re=2);const Ae=G.drawRange,Le=G.attributes.position;let We=Ae.start*Re,mt=(Ae.start+Ae.count)*Re;me!==null&&(We=Math.max(We,me.start*Re),mt=Math.min(mt,(me.start+me.count)*Re)),Te!==null?(We=Math.max(We,0),mt=Math.min(mt,Te.count)):Le!=null&&(We=Math.max(We,0),mt=Math.min(mt,Le.count));const Ft=mt-We;if(Ft<0||Ft===1/0)return;re.setup(W,F,be,G,Te);let $t,He=ee;if(Te!==null&&($t=Mt.get(Te),He=ne,He.setIndex($t)),W.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*ie()),He.setMode(1)):He.setMode(4);else if(W.isLine){let De=F.linewidth;De===void 0&&(De=1),he.setLineWidth(De*ie()),W.isLineSegments?He.setMode(1):W.isLineLoop?He.setMode(2):He.setMode(3)}else W.isPoints?He.setMode(0):W.isSprite&&He.setMode(4);if(W.isInstancedMesh)He.renderInstances(We,Ft,W.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bn=Math.min(G.instanceCount,De);He.renderInstances(We,Ft,bn)}else He.render(We,Ft)},this.compile=function(w,I){function G(F,W,me){F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,vt(F,W,me),F.side=0,F.needsUpdate=!0,vt(F,W,me),F.side=2):vt(F,W,me)}u=St.get(w),u.init(),g.push(u),w.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights(p.useLegacyLights),w.traverse(function(F){const W=F.material;if(W)if(Array.isArray(W))for(let me=0;me<W.length;me++){const ye=W[me];G(ye,w,F)}else G(W,w,F)}),g.pop(),u=null};let L=null;function N(w){L&&L(w)}function $(){ae.stop()}function se(){ae.start()}const ae=new Mr;ae.setAnimationLoop(N),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(w){L=w,ue.setAnimationLoop(w),w===null?ae.stop():ae.start()},ue.addEventListener("sessionstart",$),ue.addEventListener("sessionend",se),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(I),I=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,I,x),u=St.get(w,g.length),u.init(),g.push(u),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(fe),J=this.localClippingEnabled,q=b.init(this.clippingPlanes,J),d=Ct.get(w,m.length),d.init(),m.push(d),ze(w,I,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(O,B),q===!0&&b.beginShadows();const G=u.state.shadowsArray;if(v.render(G,w,I),q===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(d,w),u.setupLights(p.useLegacyLights),I.isArrayCamera){const F=I.cameras;for(let W=0,me=F.length;W<me;W++){const ye=F[W];$e(d,w,ye,ye.viewport)}}else $e(d,w,I);x!==null&&(Ce.updateMultisampleRenderTarget(x),Ce.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(p,w,I),re.resetDefaultState(),y=-1,C=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ze(w,I,G,F){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){F&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const ye=st.update(w),be=w.material;be.visible&&d.push(w,ye,be,G,U.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==_e.render.frame&&(w.skeleton.update(),w.skeleton.frame=_e.render.frame),!w.frustumCulled||K.intersectsObject(w))){F&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const ye=st.update(w),be=w.material;if(Array.isArray(be)){const Te=ye.groups;for(let Re=0,Ae=Te.length;Re<Ae;Re++){const Le=Te[Re],We=be[Le.materialIndex];We&&We.visible&&d.push(w,ye,We,G,U.z,Le)}}else be.visible&&d.push(w,ye,be,G,U.z,null)}}const me=w.children;for(let ye=0,be=me.length;ye<be;ye++)ze(me[ye],I,G,F)}function $e(w,I,G,F){const W=w.opaque,me=w.transmissive,ye=w.transparent;u.setupLightsView(G),q===!0&&b.setGlobalState(p.clippingPlanes,G),me.length>0&&rt(W,I,G),F&&he.viewport(A.copy(F)),W.length>0&&At(W,I,G),me.length>0&&At(me,I,G),ye.length>0&&At(ye,I,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function rt(w,I,G){const F=ce.isWebGL2;j===null&&(j=new ri(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:F&&s===!0?4:0}));const W=p.getRenderTarget();p.setRenderTarget(j),p.clear();const me=p.toneMapping;p.toneMapping=0,At(w,I,G),p.toneMapping=me,Ce.updateMultisampleRenderTarget(j),Ce.updateRenderTargetMipmap(j),p.setRenderTarget(W)}function At(w,I,G){const F=I.isScene===!0?I.overrideMaterial:null;for(let W=0,me=w.length;W<me;W++){const ye=w[W],be=ye.object,Te=ye.geometry,Re=F===null?ye.material:F,Ae=ye.group;be.layers.test(G.layers)&&Ve(be,I,G,Te,Re,Ae)}}function Ve(w,I,G,F,W,me){w.onBeforeRender(p,I,G,F,W,me),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(p,I,G,F,w,me),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,p.renderBufferDirect(G,I,F,W,w,me),W.side=0,W.needsUpdate=!0,p.renderBufferDirect(G,I,F,W,w,me),W.side=2):p.renderBufferDirect(G,I,F,W,w,me),w.onAfterRender(p,I,G,F,W,me)}function vt(w,I,G){I.isScene!==!0&&(I=Z);const F=Ee.get(w),W=u.state.lights,me=u.state.shadowsArray,ye=W.state.version,be=ke.getParameters(w,W.state,me,I,G),Te=ke.getProgramCacheKey(be);let Re=F.programs;F.environment=w.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(w.isMeshStandardMaterial?nt:Fe).get(w.envMap||F.environment),Re===void 0&&(w.addEventListener("dispose",Pe),Re=new Map,F.programs=Re);let Ae=Re.get(Te);if(Ae!==void 0){if(F.currentProgram===Ae&&F.lightsStateVersion===ye)return Lt(w,be),Ae}else be.uniforms=ke.getUniforms(w),w.onBuild(G,be,p),w.onBeforeCompile(be,p),Ae=ke.acquireProgram(be,Te),Re.set(Te,Ae),F.uniforms=be.uniforms;const Le=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=b.uniform),Lt(w,be),F.needsLights=Ur(w),F.lightsStateVersion=ye,F.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix);const We=Ae.getUniforms(),mt=xn.seqWithValue(We.seq,Le);return F.currentProgram=Ae,F.uniformsList=mt,Ae}function Lt(w,I){const G=Ee.get(w);G.outputEncoding=I.outputEncoding,G.instancing=I.instancing,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function zr(w,I,G,F,W){I.isScene!==!0&&(I=Z),Ce.resetTextureUnits();const me=I.fog,ye=F.isMeshStandardMaterial?I.environment:null,be=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:3e3,Te=(F.isMeshStandardMaterial?nt:Fe).get(F.envMap||ye),Re=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!F.normalMap&&!!G.attributes.tangent,Le=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color,Ft=F.toneMapped?p.toneMapping:0,$t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,He=$t!==void 0?$t.length:0,De=Ee.get(F),bn=u.state.lights;if(q===!0&&(J===!0||w!==C)){const gt=w===C&&F.id===y;b.setState(F,w,gt)}let Ze=!1;F.version===De.__version?(De.needsLights&&De.lightsStateVersion!==bn.state.version||De.outputEncoding!==be||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||De.envMap!==Te||F.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==b.numPlanes||De.numIntersection!==b.numIntersection)||De.vertexAlphas!==Re||De.vertexTangents!==Ae||De.morphTargets!==Le||De.morphNormals!==We||De.morphColors!==mt||De.toneMapping!==Ft||ce.isWebGL2===!0&&De.morphTargetsCount!==He)&&(Ze=!0):(Ze=!0,De.__version=F.version);let Zt=De.currentProgram;Ze===!0&&(Zt=vt(F,I,W));let fs=!1,Li=!1,En=!1;const ot=Zt.getUniforms(),Kt=De.uniforms;if(he.useProgram(Zt.program)&&(fs=!0,Li=!0,En=!0),F.id!==y&&(y=F.id,Li=!0),fs||C!==w){if(ot.setValue(z,"projectionMatrix",w.projectionMatrix),ce.logarithmicDepthBuffer&&ot.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),C!==w&&(C=w,Li=!0,En=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const gt=ot.map.cameraPosition;gt!==void 0&&gt.setValue(z,U.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ot.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&ot.setValue(z,"viewMatrix",w.matrixWorldInverse)}if(W.isSkinnedMesh){ot.setOptional(z,W,"bindMatrix"),ot.setOptional(z,W,"bindMatrixInverse");const gt=W.skeleton;gt&&(ce.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),ot.setValue(z,"boneTexture",gt.boneTexture,Ce),ot.setValue(z,"boneTextureSize",gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tn=G.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0&&ce.isWebGL2===!0)&&Q.update(W,G,Zt),(Li||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,ot.setValue(z,"receiveShadow",W.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Kt.envMap.value=Te,Kt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Li&&(ot.setValue(z,"toneMappingExposure",p.toneMappingExposure),De.needsLights&&Br(Kt,En),me&&F.fog===!0&&Ge.refreshFogUniforms(Kt,me),Ge.refreshMaterialUniforms(Kt,F,H,D,j),xn.upload(z,De.uniformsList,Kt,Ce)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(xn.upload(z,De.uniformsList,Kt,Ce),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ot.setValue(z,"center",W.center),ot.setValue(z,"modelViewMatrix",W.modelViewMatrix),ot.setValue(z,"normalMatrix",W.normalMatrix),ot.setValue(z,"modelMatrix",W.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const gt=F.uniformsGroups;for(let Cn=0,Gr=gt.length;Cn<Gr;Cn++)if(ce.isWebGL2){const ps=gt[Cn];X.update(ps,Zt),X.bind(ps,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function Br(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Ur(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,I,G){Ee.get(w.texture).__webglTexture=I,Ee.get(w.depthTexture).__webglTexture=G;const F=Ee.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const G=Ee.get(w);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,G=0){x=w,M=I,S=G;let F=!0,W=null,me=!1,ye=!1;if(w){const Te=Ee.get(w);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Te.__webglFramebuffer===void 0?Ce.setupRenderTarget(w):Te.__hasExternalTextures&&Ce.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const Ae=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(W=Ae[I],me=!0):ce.isWebGL2&&w.samples>0&&Ce.useMultisampledRTT(w)===!1?W=Ee.get(w).__webglMultisampledFramebuffer:W=Ae,A.copy(w.viewport),P.copy(w.scissor),_=w.scissorTest}else A.copy(R).multiplyScalar(H).floor(),P.copy(k).multiplyScalar(H).floor(),_=Y;if(he.bindFramebuffer(36160,W)&&ce.drawBuffers&&F&&he.drawBuffers(w,W),he.viewport(A),he.scissor(P),he.setScissorTest(_),me){const Te=Ee.get(w.texture);z.framebufferTexture2D(36160,36064,34069+I,Te.__webglTexture,G)}else if(ye){const Te=Ee.get(w.texture),Re=I||0;z.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,Re)}y=-1},this.readRenderTargetPixels=function(w,I,G,F,W,me,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){he.bindFramebuffer(36160,be);try{const Te=w.texture,Re=Te.format,Ae=Te.type;if(Re!==1023&&pe.convert(Re)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===1016&&(oe.has("EXT_color_buffer_half_float")||ce.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ae!==1009&&pe.convert(Ae)!==z.getParameter(35738)&&!(Ae===1015&&(ce.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-F&&G>=0&&G<=w.height-W&&z.readPixels(I,G,F,W,pe.convert(Re),pe.convert(Ae),me)}finally{const Te=x!==null?Ee.get(x).__webglFramebuffer:null;he.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(w,I,G=0){const F=Math.pow(2,-G),W=Math.floor(I.image.width*F),me=Math.floor(I.image.height*F);Ce.setTexture2D(I,0),z.copyTexSubImage2D(3553,G,0,0,w.x,w.y,W,me),he.unbindTexture()},this.copyTextureToTexture=function(w,I,G,F=0){const W=I.image.width,me=I.image.height,ye=pe.convert(G.format),be=pe.convert(G.type);Ce.setTexture2D(G,0),z.pixelStorei(37440,G.flipY),z.pixelStorei(37441,G.premultiplyAlpha),z.pixelStorei(3317,G.unpackAlignment),I.isDataTexture?z.texSubImage2D(3553,F,w.x,w.y,W,me,ye,be,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(3553,F,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):z.texSubImage2D(3553,F,w.x,w.y,ye,be,I.image),F===0&&G.generateMipmaps&&z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(w,I,G,F,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,Te=pe.convert(F.format),Re=pe.convert(F.type);let Ae;if(F.isData3DTexture)Ce.setTexture3D(F,0),Ae=32879;else if(F.isDataArrayTexture)Ce.setTexture2DArray(F,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,F.flipY),z.pixelStorei(37441,F.premultiplyAlpha),z.pixelStorei(3317,F.unpackAlignment);const Le=z.getParameter(3314),We=z.getParameter(32878),mt=z.getParameter(3316),Ft=z.getParameter(3315),$t=z.getParameter(32877),He=G.isCompressedTexture?G.mipmaps[0]:G.image;z.pixelStorei(3314,He.width),z.pixelStorei(32878,He.height),z.pixelStorei(3316,w.min.x),z.pixelStorei(3315,w.min.y),z.pixelStorei(32877,w.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(Ae,W,I.x,I.y,I.z,me,ye,be,Te,Re,He.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ae,W,I.x,I.y,I.z,me,ye,be,Te,He.data)):z.texSubImage3D(Ae,W,I.x,I.y,I.z,me,ye,be,Te,Re,He),z.pixelStorei(3314,Le),z.pixelStorei(32878,We),z.pixelStorei(3316,mt),z.pixelStorei(3315,Ft),z.pixelStorei(32877,$t),W===0&&F.generateMipmaps&&z.generateMipmap(Ae),he.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ce.setTextureCube(w,0):w.isData3DTexture?Ce.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ce.setTexture2DArray(w,0):Ce.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){M=0,S=0,x=null,he.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(ls.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class su extends ls{}su.prototype.isWebGL1Renderer=!0;class ru extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class cs extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zs=new T,Ks=new T,Js=new Be,Kn=new rs,mn=new ji;class Cr extends et{constructor(e=new Qe,t=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Zs.fromBufferAttribute(t,n-1),Ks.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Zs.distanceTo(Ks);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mn.copy(i.boundingSphere),mn.applyMatrix4(n),mn.radius+=s,e.ray.intersectsSphere(mn)===!1)return;Js.copy(n).invert(),Kn.copy(e.ray).applyMatrix4(Js);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,h=new T,d=new T,u=new T,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){const M=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let x=M,y=S-1;x<y;x+=m){const C=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(f,C),h.fromBufferAttribute(f,A),Kn.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const M=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let x=M,y=S-1;x<y;x+=m){if(c.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),Kn.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Qs=new T,er=new T;class ou extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Qs.fromBufferAttribute(t,n),er.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Qs.distanceTo(er);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mn extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tr=new Be,is=new rs,gn=new ji,_n=new T;class vn extends et{constructor(e=new Qe,t=new Mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gn.copy(i.boundingSphere),gn.applyMatrix4(n),gn.radius+=s,e.ray.intersectsSphere(gn)===!1)return;tr.copy(n).invert(),is.copy(e.ray).applyMatrix4(tr);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,p=m;g<p;g++){const f=c.getX(g);_n.fromBufferAttribute(d,f),ir(_n,f,l,n,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,p=m;g<p;g++)_n.fromBufferAttribute(d,g),ir(_n,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ir(r,e,t,i,n,s,a){const o=is.distanceSqToPoint(r);if(o<t){const l=new T;is.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class au extends ht{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei extends Qe{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],m=[];let g=0;const p=[],f=i/2;let M=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(m,2));function S(){const y=new T,C=new T;let A=0;const P=(t-e)/i;for(let _=0;_<=s;_++){const E=[],D=_/s,H=D*(t-e)+e;for(let O=0;O<=n;O++){const B=O/n,R=B*l+o,k=Math.sin(R),Y=Math.cos(R);C.x=H*k,C.y=-D*i+f,C.z=H*Y,d.push(C.x,C.y,C.z),y.set(k,P,Y).normalize(),u.push(y.x,y.y,y.z),m.push(B,1-D),E.push(g++)}p.push(E)}for(let _=0;_<n;_++)for(let E=0;E<s;E++){const D=p[E][_],H=p[E+1][_],O=p[E+1][_+1],B=p[E][_+1];h.push(D,H,B),h.push(H,O,B),A+=6}c.addGroup(M,A,0),M+=A}function x(y){const C=g,A=new Me,P=new T;let _=0;const E=y===!0?e:t,D=y===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,f*D,0),u.push(0,D,0),m.push(.5,.5),g++;const H=g;for(let O=0;O<=n;O++){const R=O/n*l+o,k=Math.cos(R),Y=Math.sin(R);P.x=E*Y,P.y=f*D,P.z=E*k,d.push(P.x,P.y,P.z),u.push(0,D,0),A.x=k*.5+.5,A.y=Y*.5*D+.5,m.push(A.x,A.y),g++}for(let O=0;O<n;O++){const B=C+O,R=H+O;y===!0?h.push(R,R+1,B):h.push(R+1,R,B),_+=3}c.addGroup(M,_,y===!0?1:2),M+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xi extends Ei{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Xi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends Qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new T,y=new T,C=new T;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],y),m(t[A+2],C),l(x,y,C,S)}function l(S,x,y,C){const A=C+1,P=[];for(let _=0;_<=A;_++){P[_]=[];const E=S.clone().lerp(y,_/A),D=x.clone().lerp(y,_/A),H=A-_;for(let O=0;O<=H;O++)O===0&&_===A?P[_][O]=E:P[_][O]=E.clone().lerp(D,O/H)}for(let _=0;_<A;_++)for(let E=0;E<2*(A-_)-1;E++){const D=Math.floor(E/2);E%2===0?(u(P[_][D+1]),u(P[_+1][D]),u(P[_][D])):(u(P[_][D+1]),u(P[_+1][D+1]),u(P[_+1][D]))}}function c(S){const x=new T;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(S),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const S=new T;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const y=f(S)/2/Math.PI+.5,C=M(S)/Math.PI+.5;a.push(y,1-C)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const x=a[S+0],y=a[S+2],C=a[S+4],A=Math.max(x,y,C),P=Math.min(x,y,C);A>.9&&P<.1&&(x<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function u(S){s.push(S.x,S.y,S.z)}function m(S,x){const y=S*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const S=new T,x=new T,y=new T,C=new T,A=new Me,P=new Me,_=new Me;for(let E=0,D=0;E<s.length;E+=9,D+=6){S.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),A.set(a[D+0],a[D+1]),P.set(a[D+2],a[D+3]),_.set(a[D+4],a[D+5]),C.copy(S).add(x).add(y).divideScalar(3);const H=f(C);p(A,D+0,S,H),p(P,D+2,x,H),p(_,D+4,y,H)}}function p(S,x,y,C){C<0&&S.x===1&&(a[x]=S.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function M(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.vertices,e.indices,e.radius,e.details)}}class us extends hs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new us(e.radius,e.detail)}}class si extends Qe{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,u=new T,m=[],g=[],p=[],f=[];for(let M=0;M<=i;M++){const S=[],x=M/i;let y=0;M==0&&a==0?y=.5/t:M==i&&l==Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(n+A*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(n+A*s)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(A+y,1-x),S.push(c++)}h.push(S)}for(let M=0;M<i;M++)for(let S=0;S<t;S++){const x=h[M][S+1],y=h[M][S],C=h[M+1][S],A=h[M+1][S+1];(M!==0||a>0)&&m.push(x,y,A),(M!==i-1||l<Math.PI)&&m.push(y,C,A)}this.setIndex(m),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nt extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const nr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lu{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const cu=new lu;class Ar{constructor(e){this.manager=e!==void 0?e:cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class hu extends Ar{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=nr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=qi("img");function l(){h(),nr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class uu extends Ar{constructor(e){super(e)}load(e,t,i,n){const s=new ht,a=new hu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class ds extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Jn=new Be,sr=new T,rr=new T;class Lr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sr.setFromMatrixPosition(e.matrixWorld),t.position.copy(sr),rr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rr),t.updateMatrixWorld(),Jn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const or=new Be,Ui=new T,Qn=new T;class du extends Lr{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ui.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ui),Qn.copy(i.position),Qn.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qn),i.updateMatrixWorld(),n.makeTranslation(-Ui.x,-Ui.y,-Ui.z),or.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or)}}class ki extends ds{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fu extends Lr{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new fu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mu extends ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ar(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ar();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ar(){return(typeof performance>"u"?Date:performance).now()}class _u extends ou{constructor(e=10,t=10,i=4473924,n=8947848){i=new Se(i),n=new Se(n);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,m=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const p=u===s?i:n;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const h=new Qe;h.setAttribute("position",new Oe(l,3)),h.setAttribute("color",new Oe(c,3));const d=new cs({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ns);class xu{constructor(){this.textureLoader=new uu,this.modelCache=new Map,this.textureCache=new Map,this.materialCache=new Map}loadTexture(e,t){if(this.textureCache.has(e)){const n=this.textureCache.get(e);return t&&t(n),n}const i=this.textureLoader.load(e,n=>{t&&t(n)});return this.textureCache.set(e,i),i}createMaterial(e){const t=JSON.stringify(e);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new Nt(e);return this.materialCache.set(t,i),i}createBunnyModel(){const e=new Ie(new kt(1,1,1),this.createMaterial({color:3368635})),t=new Ie(new Xi(.2,.5,4),this.createMaterial({color:16724787}));return t.position.set(0,0,.75),t.rotation.x=-Math.PI/2,e.add(t),e}createHumanModel(){return new Ie(new kt(.8,1.8,.6),this.createMaterial({color:6732595}))}}class vu{constructor(e,t){this.game=e,this.container=t,this.instructions=null,this.keys={w:!1,a:!1,s:!1,d:!1},this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isMouseDown=!1,this.prevMouseX=0,this.prevMouseY=0,this.cameraAngle=Math.PI,this.cameraAngleY=.5,this.targetCameraAngle=this.cameraAngle,this.targetCameraAngleY=this.cameraAngleY,this.orbitSpeed=.005,this.isFirstPerson=this.game&&this.game.gameMode==="first_person",console.log("InputManager created - FP mode:",this.isFirstPerson),this.setupEventListeners()}setupEventListeners(){if(!this.container){console.error("InputManager: container is null, cannot setup event listeners");return}console.log("Setting up InputManager event listeners"),this.container.addEventListener("mousedown",e=>{this.handleMouseDown(e)}),document.addEventListener("mousemove",e=>{this.handleMouseMove(e)}),document.addEventListener("mouseup",e=>{this.handleMouseUp(e)}),document.addEventListener("keydown",e=>this.handleKey(e,!0)),document.addEventListener("keyup",e=>this.handleKey(e,!1)),document.addEventListener("pointerlockchange",()=>{console.log("Pointer lock state changed:",!!document.pointerLockElement)}),document.addEventListener("pointerlockerror",()=>{console.error("Pointer lock error")}),console.log("InputManager event listeners setup complete")}handleMouseDown(e){console.log("Mouse down in InputManager"),this.isFirstPerson&&this.container&&document.pointerLockElement!==this.container&&(console.log("Requesting pointer lock for first-person mode"),this.container.requestPointerLock()),this.game.player&&this.game.player.handleMouseDown(e),this.instructions&&(this.instructions.style.display="none",this.game.player&&(console.log("Initializing player controls from mouse down"),this.game.player.onInstructionsDismissed())),this.isMouseDown=!0,this.prevMouseX=e.clientX,this.prevMouseY=e.clientY}handleMouseUp(e){console.log("Mouse up in InputManager"),this.isMouseDown=!1,this.game.player&&this.game.player.handleMouseUp(e)}handleMouseMove(e){this.game.player&&this.game.player.handleMouseMove(e,{prevMouseX:this.prevMouseX,prevMouseY:this.prevMouseY,isMouseDown:this.isMouseDown}),this.instructions&&this.instructions.style.display==="none"&&(this.prevMouseX=e.clientX,this.prevMouseY=e.clientY)}handleKey(e,t){const i=e.code;if(i==="KeyW")this.keys.w=t,this.moveForward=t;else if(i==="KeyA")this.keys.a=t,this.moveLeft=t;else if(i==="KeyS")this.keys.s=t,this.moveBackward=t;else if(i==="KeyD")this.keys.d=t,this.moveRight=t;else if(i==="KeyT"&&t){const n=this.game.switchPlayerMode();console.log("Switched to player mode:",n)}else i==="Escape"&&t&&this.showInstructions()}addInstructions(e){console.log("Adding instructions overlay");const t=document.createElement("div");t.className="instructions",t.innerHTML=`
            <div class="instructions-content">
                <h2>Game Controls</h2>
                <p>Click to play</p>
                <p>W, A, S, D to move</p>
                <p>In third-person: Hold and drag mouse to orbit camera</p>
                <p>In first-person: Mouse to look around</p>
                <p>In first-person: Click to shoot flamethrower</p>
                <p>Press T to toggle between modes</p>
                <p>Press ESC to exit game mode</p>
            </div>
        `,t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.color="white",t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.fontFamily="Arial, sans-serif",t.style.zIndex="100",t.style.cursor="pointer",t.style.textAlign="center",this.instructions=t,e.appendChild(t),t.addEventListener("click",()=>{console.log("Instructions clicked, hiding and initializing player"),this.hideInstructions(),this.game.player&&this.game.player.onInstructionsDismissed()})}showInstructions(){this.instructions&&(this.instructions.style.display="flex")}hideInstructions(){this.instructions&&(this.instructions.style.display="none",this.prevMouseX=0,this.prevMouseY=0)}getKeysState(){return{...this.keys,moveForward:this.moveForward,moveBackward:this.moveBackward,moveLeft:this.moveLeft,moveRight:this.moveRight}}getCameraOrbitState(){return{cameraAngle:this.cameraAngle,cameraAngleY:this.cameraAngleY,targetCameraAngle:this.targetCameraAngle,targetCameraAngleY:this.targetCameraAngleY}}updateCameraOrbit(e){this.cameraAngle=e.cameraAngle??this.cameraAngle,this.cameraAngleY=e.cameraAngleY??this.cameraAngleY,this.targetCameraAngle=e.targetCameraAngle??this.targetCameraAngle,this.targetCameraAngleY=e.targetCameraAngleY??this.targetCameraAngleY}}class Dr{constructor(e,t={}){this.game=e,this.scene=e.scene,this.camera=e.camera,this.model=null,this.position=new T(0,0,0),this.direction=new T(0,0,-1),this.targetDirection=new T(0,0,-1),this.physics=null,this.movement=null,this.controls=null,this.velocity=new T(0,0,0),this.isGrounded=!0,this.eyeHeight=t.eyeHeight||1.6,console.log("Player base class initialized")}init(){console.warn("Player.init() should be implemented by child classes")}update(e){const t=this.controls?this.controls.getInput():null;this.movement&&t&&this.movement.update(t,e,this),this.physics&&this.physics.apply(this,e)}handleMouseDown(e){this.controls&&this.controls.handleMouseDown(e)}handleMouseMove(e,t){if(this.controls)if(document.pointerLockElement===this.game.container){const i={movementX:e.movementX||0,movementY:e.movementY||0,isPointerLocked:!0};this.controls.handleMouseMove(e,i)}else this.controls.handleMouseMove(e,t)}onInstructionsDismissed(){if(console.log("Instructions dismissed, initializing controls"),this.controls&&typeof this.controls.init=="function")try{if(!this.game||!this.game.container){console.error("Cannot initialize controls: game.container is null or undefined");return}this.controls.init(this.game.container),console.log("Controls initialized successfully")}catch(e){console.error("Error initializing player controls:",e)}else console.warn("No controls to initialize or init method not available")}movePlayer(e){this.model&&(this.model.position.add(e),this.position.copy(this.model.position))}rotateToDirection(e,t){if(this.movement)this.movement.rotate(this,e,t);else if(this.model){const i=new oi,n=new Be,s=e.clone().negate(),a=new T(0,1,0);n.lookAt(new T(0,0,0),s,a),i.setFromRotationMatrix(n);const o=this.movement?this.movement.rotationSpeed:5,l=Math.min(1,o*t);this.model.quaternion.slerp(i,l),this.direction.lerp(e,l).normalize()}}cleanup(){console.log("Cleaning up player"),this.controls&&typeof this.controls.cleanup=="function"&&this.controls.cleanup(),this.model&&(this.scene.remove(this.model),this.model=null)}setPhysics(e){this.physics=e}setMovement(e){this.movement=e}setControls(e){if(!e){console.warn("Attempting to set null controls component");return}this.controls=e,console.log("Controls component set");const t=["getInput","init","cleanup"];for(const i of t)typeof this.controls[i]!="function"&&console.warn(`Controls component missing required method: ${i}`)}handleMouseUp(e){}}class Pr{constructor(e={}){this.gravity=e.gravity||9.8,this.frictionCoefficient=e.frictionCoefficient||.1,this.airResistance=e.airResistance||.01,this.maxVelocity=e.maxVelocity||10}apply(e,t){console.warn("BasePhysics.apply() should be implemented by subclasses")}applyGravity(e,t){e.velocity&&(e.velocity.y-=this.gravity*t)}applyFriction(e,t){if(!e.velocity||!e.isGrounded)return;const i=e.velocity.clone().setY(0).normalize().multiplyScalar(-this.frictionCoefficient);e.velocity.add(i)}limitVelocity(e){e.velocity&&e.velocity.length()>this.maxVelocity&&e.velocity.normalize().multiplyScalar(this.maxVelocity)}}class yu extends Pr{constructor(e={}){super({gravity:7.5,frictionCoefficient:.05,airResistance:.015,maxVelocity:12,...e}),this.bounceCoefficient=e.bounceCoefficient||.3,this.floatiness=e.floatiness||.8,this.groundLevel=.5}apply(e,t){if(e.velocity||(e.velocity=new T(0,0,0),e.isGrounded=!0),e.model&&e.model.position.y<this.groundLevel&&(e.model.position.y=this.groundLevel,e.position.copy(e.model.position),e.isGrounded=!0,e.velocity.y=0),!e.isGrounded){const n=this.gravity*this.floatiness;e.velocity.y-=n*t}if(!e.isGrounded){const n=e.velocity.clone().multiplyScalar(-this.airResistance*t);e.velocity.add(n)}e.isGrounded&&(this.applyFriction(e,t),e.velocity.y=0),this.limitVelocity(e);const i=new T(0,e.velocity.y*t,0);e.movePlayer(i),e.model&&e.model.position.y<this.groundLevel?(e.model.position.y=this.groundLevel,e.position.copy(e.model.position),e.velocity.y<-1?e.velocity.y=-e.velocity.y*this.bounceCoefficient:(e.velocity.y=0,e.isGrounded=!0)):e.model&&e.model.position.y>this.groundLevel+.1&&(e.isGrounded=!1)}}class Rr{constructor(e={}){this.movementSpeed=e.movementSpeed||5,this.rotationSpeed=e.rotationSpeed||5,this.jumpForce=e.jumpForce||5,this.acceleration=e.acceleration||10,this.deceleration=e.deceleration||5}update(e,t,i){console.warn("BaseMovement.update() should be implemented by subclasses")}move(e,t){e.model&&(e.model.position.add(t),e.position.copy(e.model.position))}rotate(e,t,i){if(!e.model)return;const n=new oi,s=new Be,a=t.clone().negate(),o=new T(0,1,0);s.lookAt(new T(0,0,0),a,o),n.setFromRotationMatrix(s);const l=Math.min(1,this.rotationSpeed*i);e.model.quaternion.slerp(n,l),e.direction.lerp(t,l).normalize()}jump(e){e.isGrounded&&e.velocity&&(e.velocity.y=this.jumpForce,e.isGrounded=!1)}}class Mu extends Rr{constructor(e={}){super({movementSpeed:7,rotationSpeed:4,jumpForce:7,acceleration:12,deceleration:4,...e}),this.lastDirection=new T,this.moveBuffer=new T,this.sprintMultiplier=2,this.isSprinting=!1,this.hopTime=0,this.hopFrequency=3,this.hopAmplitude=.15,this.visualOffset=new T(0,0,0)}update(e,t,i){const n=e.moveDirection,s=e.actions;this.isSprinting=s.sprint||!1;const a=e.cameraOrbit.cameraAngle||0,o=new T(0,0,-1);o.applyAxisAngle(new T(0,1,0),a),o.y=0,o.normalize();const l=new T(1,0,0);l.applyAxisAngle(new T(0,1,0),a),l.y=0,l.normalize();const c=new T;let h=!1;const d=this.isSprinting?this.movementSpeed*this.sprintMultiplier:this.movementSpeed;if(n.z<0&&(c.add(o.clone().multiplyScalar(d*t)),h=!0),n.z>0&&(c.add(o.clone().multiplyScalar(-d*t)),h=!0),n.x<0&&(c.add(l.clone().multiplyScalar(-d*t)),h=!0),n.x>0&&(c.add(l.clone().multiplyScalar(d*t)),h=!0),h){const u=new T(c.x,0,c.z);if(this.moveBuffer.x=Tt.lerp(this.moveBuffer.x,u.x,this.acceleration*t),this.moveBuffer.z=Tt.lerp(this.moveBuffer.z,u.z,this.acceleration*t),this.isSprinting&&i.isGrounded){this.hopTime+=t*this.hopFrequency;const g=(Math.sin(this.hopTime)+1)*.5,f=g*g*(3-2*g)*this.hopAmplitude;this.visualOffset.y=Tt.lerp(this.visualOffset.y,f,Math.min(1,6*t)),i.model&&(i.model.position.y=Math.max(.5,i.position.y)+this.visualOffset.y)}else this.visualOffset.y>.001?(this.visualOffset.y*=1-Math.min(1,10*t),i.model&&(i.model.position.y=Math.max(.5,i.position.y)+this.visualOffset.y)):i.model&&(i.model.position.y=Math.max(.5,i.position.y));const m=new T(this.moveBuffer.x,0,this.moveBuffer.z);this.move(i,m),this.lastDirection.copy(u).normalize(),this.lastDirection.lengthSq()>.01&&this.rotate(i,this.lastDirection,t)}else{if(this.moveBuffer.x*=1-this.deceleration*t,this.moveBuffer.z*=1-this.deceleration*t,this.moveBuffer.length()>.01){const u=new T(this.moveBuffer.x,0,this.moveBuffer.z);this.move(i,u)}this.visualOffset.y>.001?(this.visualOffset.y*=1-Math.min(1,10*t),i.model&&(i.model.position.y=Math.max(.5,i.position.y)+this.visualOffset.y)):i.model&&(i.model.position.y=Math.max(.5,i.position.y))}s.jump&&i.isGrounded&&this.jump(i)}}class Fr{constructor(e={}){this.sensitivity=e.sensitivity||.002,this.invertY=e.invertY||!1,this.lockPointer=e.lockPointer||!1,this.enableGamepad=e.enableGamepad||!0,this.keys={},this.mouseState={buttons:{},position:new Me,movement:new Me},this.gamepadState=null,this.cameraOrbit={cameraAngle:0,targetCameraAngle:0,cameraAngleY:0,targetCameraAngleY:0},this.onCameraZoom=null}init(e){console.warn("BaseControls.init() should be implemented by subclasses")}getInput(){return console.warn("BaseControls.getInput() should be implemented by subclasses"),{moveDirection:new T,lookDirection:new Me,actions:{},cameraOrbit:{...this.cameraOrbit}}}handleKeyDown(e){this.keys[e.key.toLowerCase()]=!0}handleKeyUp(e){this.keys[e.key.toLowerCase()]=!1}handleMouseDown(e){this.mouseState.buttons[e.button]=!0}handleMouseUp(e){this.mouseState.buttons[e.button]=!1}handleMouseMove(e){this.mouseState.position.set(e.clientX,e.clientY),e.movementX!==void 0&&e.movementY!==void 0&&this.mouseState.movement.set(e.movementX,e.movementY)}updateCameraOrbit(e){Object.assign(this.cameraOrbit,e)}cleanup(){console.warn("BaseControls.cleanup() should be implemented by subclasses")}setCameraZoomCallback(e){this.onCameraZoom=e}}class Su extends Fr{constructor(e={}){super({sensitivity:.0025,invertY:!1,lockPointer:!0,enableGamepad:!0,...e}),this.orbitSmoothingFactor=e.orbitSmoothingFactor||.1,this.maxVerticalAngle=e.maxVerticalAngle||Math.PI/3,this.container=null,this.isPointerLocked=!1,this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),this.boundWheel=this.handleWheel.bind(this)}init(e){if(!e){console.error("BunnyControls.init: Container is null or undefined");return}this.container=e,window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),e.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("wheel",this.boundWheel),document.addEventListener("pointerlockchange",this.boundPointerLockChange),this.lockPointer&&e.addEventListener("click",()=>{document.pointerLockElement!==e&&e.requestPointerLock()}),console.log("BunnyControls initialized with container:",e.id)}handlePointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.container,console.log("Pointer lock changed:",this.isPointerLocked)}handleWheel(e){const t=Math.sign(e.deltaY);typeof this.onCameraZoom=="function"&&this.onCameraZoom(t)}handleMouseMove(e){if(super.handleMouseMove(e),this.isPointerLocked){const t=e.movementX*this.sensitivity,i=e.movementY*this.sensitivity*(this.invertY?-1:1);this.cameraOrbit.targetCameraAngle-=t,this.cameraOrbit.targetCameraAngleY+=i,this.cameraOrbit.targetCameraAngleY=Math.max(-this.maxVerticalAngle,Math.min(this.maxVerticalAngle,this.cameraOrbit.targetCameraAngleY)),this.cameraOrbit.cameraAngle=Tt.lerp(this.cameraOrbit.cameraAngle,this.cameraOrbit.targetCameraAngle,this.orbitSmoothingFactor),this.cameraOrbit.cameraAngleY=Tt.lerp(this.cameraOrbit.cameraAngleY,this.cameraOrbit.targetCameraAngleY,this.orbitSmoothingFactor)}}getInput(){const e=new T(0,0,0);(this.keys.w||this.keys.arrowup)&&(e.z=-1),(this.keys.s||this.keys.arrowdown)&&(e.z=1),(this.keys.a||this.keys.arrowleft)&&(e.x=-1),(this.keys.d||this.keys.arrowright)&&(e.x=1),e.length()>1&&e.normalize();const t={jump:this.keys[" "]||!1,sprint:this.keys.shift||!1,interact:this.keys.e||this.mouseState.buttons[0]||!1};return{moveDirection:e,lookDirection:new Me(this.mouseState.movement.x,this.mouseState.movement.y),actions:t,cameraOrbit:{...this.cameraOrbit}}}cleanup(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),window.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("pointerlockchange",this.boundPointerLockChange)}setCameraZoomCallback(e){this.onCameraZoom=e}}class wu extends Dr{constructor(e,t={}){super(e,{eyeHeight:.8,...t}),this.thirdPersonDistance=t.thirdPersonDistance||5,this.thirdPersonHeight=t.thirdPersonHeight||2,this.cameraTarget=new T,this.setPhysics(new yu(t.physics||{})),this.setMovement(new Mu(t.movement||{})),this.setControls(new Su(t.controls||{})),this.controls&&typeof this.controls.setCameraZoomCallback=="function"?this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this)):console.warn("BunnyPlayer: controls.setCameraZoomCallback is not available"),this.init()}init(){this.model=this.game.assetLoader.createBunnyModel(),this.model.position.set(0,.5,0),this.model.traverse(e=>{e instanceof Ie&&(e.castShadow=!0,e.receiveShadow=!0)}),this.scene.add(this.model),this.position.copy(this.model.position),this.updateCameraPosition()}update(e){super.update(e),this.updateCameraPosition()}adjustCameraDistance(e){this.thirdPersonDistance+=e*.5,this.thirdPersonDistance=Math.max(2,Math.min(10,this.thirdPersonDistance))}updateCameraPosition(){if(!this.model)return;const e=this.controls?this.controls.cameraOrbit:{cameraAngle:0,cameraAngleY:0},t=new T(Math.sin(e.cameraAngle)*this.thirdPersonDistance,this.thirdPersonHeight+Math.sin(e.cameraAngleY)*this.thirdPersonDistance,Math.cos(e.cameraAngle)*this.thirdPersonDistance);this.camera.position.copy(this.model.position).add(t),this.cameraTarget.copy(this.model.position).add(new T(0,this.eyeHeight,0)),this.camera.lookAt(this.cameraTarget)}onInstructionsDismissed(){super.onInstructionsDismissed()}}class bu extends Pr{constructor(e={}){super({gravity:9.8,frictionCoefficient:.2,airResistance:.01,maxVelocity:8,...e}),this.groundedThreshold=e.groundedThreshold||.1,this.mass=e.mass||70,this.inertiaFactor=e.inertiaFactor||.85,this.groundLevel=1}apply(e,t){if(e.velocity||(e.velocity=new T(0,0,0),e.isGrounded=!0),!e.model)return;if(e.model.position.y<this.groundLevel&&(e.model.position.y=this.groundLevel,e.position.copy(e.model.position),e.isGrounded=!0,e.velocity.y=0),e.isGrounded||(e.velocity.y-=this.gravity*t),!e.isGrounded){const n=e.velocity.clone().multiplyScalar(-this.airResistance*t);e.velocity.add(n)}if(e.isGrounded&&(this.applyFriction(e,t),e.velocity.y=0),e.previousVelocity){const n=new Me(e.velocity.x,e.velocity.z),s=new Me(e.previousVelocity.x,e.previousVelocity.z);n.lerp(s,this.inertiaFactor*t),e.velocity.x=n.x,e.velocity.z=n.y}e.previousVelocity||(e.previousVelocity=new T),e.previousVelocity.copy(e.velocity),this.limitVelocity(e);const i=new T(0,e.velocity.y*t,0);e.movePlayer(i),e.model.position.y<this.groundLevel?(e.model.position.y=this.groundLevel,e.velocity.y=0,e.isGrounded=!0,e.position.copy(e.model.position)):e.model.position.y>this.groundLevel+this.groundedThreshold&&(e.isGrounded=!1)}resolveEnvironmentCollisions(e){}}class Eu extends Rr{constructor(e={}){super({movementSpeed:5,rotationSpeed:5.5,jumpForce:5,acceleration:8,deceleration:6,...e}),this.sprintMultiplier=e.sprintMultiplier||1.8,this.crouchMultiplier=e.crouchMultiplier||.5,this.isCrouching=!1,this.isSprinting=!1,this.headBobAmount=e.headBobAmount||.05,this.headBobSpeed=e.headBobSpeed||5,this.headBobTime=0,this.footstepDistance=0,this.footstepThreshold=e.footstepThreshold||2,this.moveBuffer=new T}update(e,t,i){const n=e.moveDirection,s=e.actions,a=e.firstPersonMode;s.crouch!==this.isCrouching&&(this.isCrouching=s.crouch),this.isSprinting=s.sprint&&!this.isCrouching&&n.z<0;let o=this.movementSpeed;this.isSprinting&&(o*=this.sprintMultiplier),this.isCrouching&&(o*=this.crouchMultiplier);const l=new T;let c=!1;if(a){if(n.z!==0||n.x!==0){c=!0;const h=new T;if(i.fpCamera){const d=new Be;d.extractRotation(i.fpCamera.matrixWorld),h.set(0,0,-1).applyMatrix4(d),h.y=0,h.normalize();const u=new T;u.crossVectors(new T(0,1,0),h).normalize(),n.z!==0&&l.add(h.clone().multiplyScalar(-n.z*o*t)),n.x!==0&&l.add(u.clone().multiplyScalar(-n.x*o*t))}}}else if(n.z!==0||n.x!==0){c=!0;const h=e.cameraOrbit?e.cameraOrbit.cameraAngle:0,d=new T(0,0,-1);d.applyAxisAngle(new T(0,1,0),h),d.y=0,d.normalize();const u=new T(1,0,0);u.applyAxisAngle(new T(0,1,0),h),u.y=0,u.normalize(),n.z!==0&&l.add(d.clone().multiplyScalar(n.z*o*t)),n.x!==0&&l.add(u.clone().multiplyScalar(n.x*o*t))}if(c){const h=new T(l.x,0,l.z);this.moveBuffer.x=Tt.lerp(this.moveBuffer.x,h.x,this.acceleration*t),this.moveBuffer.z=Tt.lerp(this.moveBuffer.z,h.z,this.acceleration*t);const d=new T(this.moveBuffer.x,0,this.moveBuffer.z);if(this.move(i,d),i.isGrounded){this.headBobTime+=t*this.headBobSpeed*(this.isSprinting?1.5:1)*(this.isCrouching?.7:1);const u=Math.sin(this.headBobTime)*this.headBobAmount;a&&i.fpCamera&&i.model&&(i.fpCamera.position.y=i.eyeHeight+u),this.footstepDistance+=h.length(),this.footstepDistance>=this.footstepThreshold&&(this.playFootstepSound(i),this.footstepDistance=0)}if(!a){const u=h.clone().normalize();u.lengthSq()>.01&&this.rotate(i,u,t)}}else if(this.moveBuffer.x*=1-this.deceleration*t,this.moveBuffer.z*=1-this.deceleration*t,this.moveBuffer.length()>.01){const h=new T(this.moveBuffer.x,0,this.moveBuffer.z);this.move(i,h)}s.jump&&i.isGrounded&&this.jump(i)}playFootstepSound(e){this.isSprinting,this.isCrouching}}class Tu extends Fr{constructor(e={}){super({sensitivity:.002,invertY:e.invertY||!1,lockPointer:!0,enableGamepad:!0,...e}),this.firstPersonMode=e.firstPersonMode||!1,this.canToggleView=e.canToggleView!==void 0?e.canToggleView:!0,this.mouseSmoothingFactor=e.mouseSmoothingFactor||.2,this.container=null,this.isPointerLocked=!1,this.fpLookDirection=new Me(0,0),this.targetFpLookDirection=new Me(0,0),this.viewToggleRequested=!1,this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),this.boundWheel=this.handleWheel.bind(this),console.log("HumanControls constructed, firstPersonMode:",this.firstPersonMode)}init(e){if(!e){console.error("HumanControls.init: Container is null or undefined");return}this.container=e,console.log("HumanControls initializing with container:",e.id),window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),e.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("wheel",this.boundWheel),document.addEventListener("pointerlockchange",this.boundPointerLockChange),this.lockPointer&&e.addEventListener("click",()=>{if(console.log("Container clicked, requesting pointer lock"),document.pointerLockElement!==e)try{e.requestPointerLock()}catch(t){console.error("Error requesting pointer lock:",t)}})}handlePointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.container,console.log("Pointer lock changed:",this.isPointerLocked,"container:",this.container?this.container.id:"null")}handleWheel(e){if(this.firstPersonMode)return;const t=Math.sign(e.deltaY);typeof this.onCameraZoom=="function"&&this.onCameraZoom(t)}handleMouseDown(e){if(super.handleMouseDown(e),this.firstPersonMode&&this.container&&document.pointerLockElement!==this.container)try{this.container.requestPointerLock()}catch(t){console.error("Error requesting pointer lock:",t)}}handleKeyDown(e){super.handleKeyDown(e),e.key.toLowerCase()==="v"&&this.canToggleView&&(this.viewToggleRequested=!0,console.log("View toggle requested via V key"))}handleMouseMove(e,t){super.handleMouseMove(e,t);let i=0,n=0;if(t&&t.isPointerLocked)i=t.movementX*this.sensitivity,n=t.movementY*this.sensitivity*(this.invertY?-1:1),this.isPointerLocked=!0;else if(this.isPointerLocked&&e.movementX!==void 0)i=e.movementX*this.sensitivity,n=e.movementY*this.sensitivity*(this.invertY?-1:1);else return!this.isPointerLocked&&t,void 0;this.firstPersonMode?(this.targetFpLookDirection.x-=i,this.targetFpLookDirection.y=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,this.targetFpLookDirection.y-n)),this.fpLookDirection.x=Tt.lerp(this.fpLookDirection.x,this.targetFpLookDirection.x,this.mouseSmoothingFactor),this.fpLookDirection.y=Tt.lerp(this.fpLookDirection.y,this.targetFpLookDirection.y,this.mouseSmoothingFactor)):(this.cameraOrbit.targetCameraAngle-=i,this.cameraOrbit.targetCameraAngleY-=n,this.cameraOrbit.targetCameraAngleY=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.cameraOrbit.targetCameraAngleY)),this.cameraOrbit.cameraAngle=Tt.lerp(this.cameraOrbit.cameraAngle,this.cameraOrbit.targetCameraAngle,this.mouseSmoothingFactor),this.cameraOrbit.cameraAngleY=Tt.lerp(this.cameraOrbit.cameraAngleY,this.cameraOrbit.targetCameraAngleY,this.mouseSmoothingFactor))}getInput(){const e=new T(0,0,0);(this.keys.w||this.keys.arrowup)&&(e.z=-1),(this.keys.s||this.keys.arrowdown)&&(e.z=1),(this.keys.a||this.keys.arrowleft)&&(e.x=-1),(this.keys.d||this.keys.arrowright)&&(e.x=1),e.length()>1&&e.normalize();const t={jump:this.keys[" "]||!1,sprint:this.keys.shift||!1,interact:this.keys.e||this.mouseState.buttons[0]||!1,crouch:this.keys.control||!1,reload:this.keys.r||!1,toggleView:this.viewToggleRequested,use:this.mouseState.buttons[2]||!1};return this.viewToggleRequested,this.viewToggleRequested&&(this.viewToggleRequested=!1,console.log("View toggle requested from controls, letting player handle it")),{moveDirection:e,lookDirection:this.firstPersonMode?this.fpLookDirection.clone():new Me(this.mouseState.movement.x,this.mouseState.movement.y),actions:t,cameraOrbit:{...this.cameraOrbit},firstPersonMode:this.firstPersonMode}}cleanup(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("wheel",this.boundWheel),document.removeEventListener("pointerlockchange",this.boundPointerLockChange),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()}setCameraZoomCallback(e){this.onCameraZoom=e}updateViewMode(e){this.firstPersonMode!==e&&(console.log("Controls: updating view mode to:",e?"first-person":"third-person"),this.firstPersonMode=e)}}class Cu{constructor(e,t={}){this.player=e,this.scene=e.scene,this.game=e.game,this.name=t.name||"Unknown Weapon",this.damage=t.damage||10,this.cooldown=t.cooldown||.1,this.range=t.range||20,this.lastFireTime=0,this.isFiring=!1,this.isReloading=!1,this.model=null,this.effects=[],this.init(t)}init(e){console.log(`Initializing weapon: ${this.name}`)}startFire(){this.isFiring=!0}stopFire(){this.isFiring=!1}fire(){const e=performance.now()/1e3;return e-this.lastFireTime<this.cooldown?!1:(this.lastFireTime=e,console.log(`[DEBUG] ${this.name} fired! Scene has ${this.scene?"valid scene":"no scene"}`),this.scene&&console.log(`[DEBUG] Scene children: ${this.scene.children.length}, Effects: ${this.effects.length}`),!0)}update(e){this.isFiring&&this.fire(),this.updateEffects(e)}updateEffects(e){}attachToPlayer(){this.model&&this.player.model&&this.player.model.add(this.model)}detachFromPlayer(){this.model&&this.model.parent&&this.model.parent.remove(this.model)}cleanup(){this.stopFire(),this.detachFromPlayer(),this.effects.forEach(e=>{e.parent&&e.parent.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.effects=[]}}let wi=null;window.debugFlamethrower=function(){if(!wi){console.log("[DEBUG] No flamethrower instance found yet");return}const r=wi;return console.log("-------- FLAMETHROWER DEBUG --------"),console.log("Is initialized:",r?"yes":"no"),console.log("Is firing:",r.isFiring),console.log("Has particle system:",r.particleSystem?"yes":"no"),console.log("Particle count:",r.particles.length),console.log("Active particles:",r.particles.filter(e=>e.life>0).length),console.log("Scene:",r.scene?"valid":"null"),r.particleSystem&&(console.log("Particle system parent:",r.particleSystem.parent?r.particleSystem.parent.type:"none"),console.log("Particle system visible:",r.particleSystem.visible),console.log("Particle system frustumCulled:",r.particleSystem.frustumCulled)),r.flameLight?(console.log("------ FLAME LIGHT DEBUG ------"),console.log("Flame light intensity:",r.flameLight.intensity),console.log("Flame light distance:",r.flameLight.distance),console.log("Flame light position:",r.flameLight.position.x.toFixed(2),r.flameLight.position.y.toFixed(2),r.flameLight.position.z.toFixed(2)),console.log("Flame light casts shadow:",r.flameLight.castShadow),console.log("Flame light visible:",r.flameLight.visible),console.log("Flame light parent:",r.flameLight.parent?r.flameLight.parent.type:"none")):console.log("Flame light: NOT CREATED"),r.ambientGlowLight?(console.log("------ AMBIENT GLOW LIGHT DEBUG ------"),console.log("Ambient glow light intensity:",r.ambientGlowLight.intensity),console.log("Ambient glow light distance:",r.ambientGlowLight.distance),console.log("Ambient glow light position:",r.ambientGlowLight.position.x.toFixed(2),r.ambientGlowLight.position.y.toFixed(2),r.ambientGlowLight.position.z.toFixed(2)),console.log("Ambient glow light visible:",r.ambientGlowLight.visible)):console.log("Ambient glow light: NOT CREATED"),console.log("------ DEBUG VISUALIZERS ------"),console.log("Light debug sphere:",r.lightDebugSphere?"created":"none"),console.log("Glow debug sphere:",r.glowDebugSphere?"created":"none"),"Debug info printed"};window.analyzeSceneMaterials=function(){if(!wi||!wi.scene){console.log("[DEBUG] No flamethrower instance or scene found");return}const r=wi.scene,e={};let t=0,i=0;return r.traverse(n=>{if(n.isMesh&&(t++,n.receiveShadow&&i++,n.material)){const s=n.material.type;e[s]=(e[s]||0)+1,console.log(`Object: ${n.name||"unnamed"} - Material: ${s} - Receives Shadows: ${n.receiveShadow}`),s==="MeshStandardMaterial"?console.log(`  Roughness: ${n.material.roughness}, Metalness: ${n.material.metalness}`):s==="MeshPhongMaterial"&&console.log(`  Shininess: ${n.material.shininess}, Specular: ${n.material.specular?n.material.specular.getHexString():"none"}`)}}),console.log("------ SCENE MATERIAL ANALYSIS ------"),console.log(`Total objects: ${t}`),console.log(`Shadow receiving objects: ${i}`),console.log("Material types:",e),"Scene material analysis complete"};class Au extends Cu{constructor(e,t={}){super(e,{name:"Flamethrower",damage:5,cooldown:.05,range:30,...t}),wi=this,e||console.error("[DEBUG] Player is null in Flamethrower constructor"),e.scene||console.error("[DEBUG] Scene is null in Flamethrower constructor"),this.effects=this.effects||[],this.particles=[],this.particleCount=200,this.flameLength=25,this.flameWidth=2,this.particleSystem=null,this.flameLight=null,this.flameLightIntensity=5,this.flameLightDistance=30,this.flameLightColor=16733440,this.ambientGlowLight=null,this.ambientGlowIntensity=2,this.ambientGlowDistance=40,this.ambientGlowColor=16746564,this.useDynamicLighting=!0,this.debug=!0,this.recreationAttempted=!1,this.emergencyAttempted=!1,this.useEmergencySystem=!1,this.useCustomShaders=!1,this.flameOrigin=new T(0,0,0),this.flameDirection=new T(0,0,1),this.flameColors=[new Se(16733440).multiplyScalar(1.5),new Se(16750848).multiplyScalar(1.5),new Se(16711680).multiplyScalar(1.3),new Se(16776960).multiplyScalar(1.8)]}init(e){console.log("[DEBUG] Flamethrower init starting"),this.scene?console.log("[DEBUG] Scene is valid in Flamethrower init"):(console.error("[DEBUG] Scene is null in Flamethrower init"),this.player&&this.player.scene?(console.log("[DEBUG] Using player.scene as fallback"),this.scene=this.player.scene):this.player&&this.player.game&&this.player.game.scene?(console.log("[DEBUG] Using player.game.scene as fallback"),this.scene=this.player.game.scene):(console.error("[DEBUG] No scene available, dynamic lighting disabled"),this.useDynamicLighting=!1)),this.createWeaponModel();const t=!0;this.useCustomShaders=t,console.log("[DEBUG] Using alternative particle system implementation"),this.createParticleSystem2(),console.log("[DEBUG] Lighting setup stats:"),console.log("[DEBUG] - useDynamicLighting:",this.useDynamicLighting),console.log("[DEBUG] - scene available:",this.scene?"yes":"no"),this.scene&&this.useDynamicLighting&&this.enhanceSceneObjects(),this.useDynamicLighting?(console.log("[DEBUG] Creating flame lights now"),this.createFlameLight(),console.log("[DEBUG] After createFlameLight - flameLight created:",this.flameLight?"yes":"no","ambientGlowLight created:",this.ambientGlowLight?"yes":"no")):console.log("[DEBUG] Dynamic lighting is disabled, skipping light creation"),this.debug&&this.createDebugHelpers(),this.particles||(console.error("[DEBUG] Particles array is undefined, initializing empty array"),this.particles=[]),console.log(`[DEBUG] Flamethrower initialized - particle system: ${this.particleSystem?"created":"failed"}, particles: ${this.particles.length}`)}createWeaponModel(){const e=new Oi,t=new Ei(.1,.1,.4,16),i=new Nt({color:4473924,metalness:.8,roughness:.2}),n=new Ie(t,i);n.rotation.x=Math.PI/2,n.position.set(.15,-.1,-.1),n.castShadow=!0,e.add(n);const s=new Ei(.03,.05,.25,8),a=new Nt({color:2236962,metalness:.5,roughness:.5}),o=new Ie(s,a);o.position.set(.15,-.1,.15),o.rotation.x=Math.PI/2,o.castShadow=!0,e.add(o),this.nozzleTipPosition=new T(o.position.x,o.position.y,o.position.z+.2),e.position.set(0,-.1,-.3),this.model=e,this.player.isFirstPerson&&this.player.fpCamera?this.player.fpCamera.add(this.model):this.player.model&&this.player.model.add(this.model)}createParticleSystem(){const e=new Qe,t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount);console.log("[DEBUG] Creating particle system with",this.particleCount,"particles");for(let o=0;o<this.particleCount;o++)t[o*3]=0,t[o*3+1]=0,t[o*3+2]=0,i[o*3]=1,i[o*3+1]=.5,i[o*3+2]=0,n[o]=0,this.particles.push({position:new T,velocity:new T,color:new Se(1,.5,0),size:0,life:0,maxLife:0});e.setAttribute("position",new Je(t,3)),e.setAttribute("color",new Je(i,3)),e.setAttribute("size",new Je(n,1));const s=this.createFlameTexture();console.log("[DEBUG] Flame texture created:",s?"success":"failed");const a=new Mn({size:2,map:s,transparent:!0,vertexColors:!0,blending:2,depthWrite:!1,sizeAttenuation:!0});this.particleSystem=new vn(e,a),this.particleSystem.frustumCulled=!1,this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),console.log("[DEBUG] Particle system added to scene (effects array size:",this.effects.length,")")):console.error("[DEBUG] Cannot add particle system: scene is null")}createFlameTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 240, 120, 1)"),i.addColorStop(.4,"rgba(255, 160, 50, 0.9)"),i.addColorStop(.7,"rgba(255, 80, 10, 0.6)"),i.addColorStop(1,"rgba(255, 50, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64);const n=new au(e);return n.needsUpdate=!0,n}createDebugHelpers(){const e=new si(.05,8,8),t=new Yt({color:16711680});this.debugSphere=new Ie(e,t),this.debugSphere.position.copy(this.nozzleTipPosition);const i=new Qe,n=new Float32Array([this.nozzleTipPosition.x,this.nozzleTipPosition.y,this.nozzleTipPosition.z,this.nozzleTipPosition.x,this.nozzleTipPosition.y,this.nozzleTipPosition.z-.5]);i.setAttribute("position",new Je(n,3));const s=new cs({color:65280});if(this.debugLine=new Cr(i,s),this.useDynamicLighting){const a=new si(.2,8,8),o=new Yt({color:this.flameLightColor,transparent:!0,opacity:.6});this.lightDebugSphere=new Ie(a,o);const l=new si(.3,8,8),c=new Yt({color:this.ambientGlowColor,transparent:!0,opacity:.4});this.glowDebugSphere=new Ie(l,c),this.scene&&(this.scene.add(this.lightDebugSphere),this.scene.add(this.glowDebugSphere),this.effects.push(this.lightDebugSphere),this.effects.push(this.glowDebugSphere),console.log("[DEBUG] Added light visualization helpers to scene"))}this.model&&(this.model.add(this.debugSphere),this.model.add(this.debugLine)),console.log("[DEBUG] Debug helpers created at position:",this.nozzleTipPosition.x.toFixed(2),this.nozzleTipPosition.y.toFixed(2),this.nozzleTipPosition.z.toFixed(2))}fire(){return super.fire()?(this.debug&&(console.log("[DEBUG] Flamethrower fired! Scene has",this.scene?"valid scene":"NO SCENE"),this.scene&&console.log("[DEBUG] Scene children:",this.scene.children.length,"Effects:",this.effects.length)),this.emitParticles(),!0):!1}emitParticles(){if(this.particles||(console.error("[DEBUG] Particles array is undefined, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length){if(console.log("[DEBUG] Particle diagnostic:"),console.log(`[DEBUG] - this.particleSystem exists: ${this.particleSystem?"yes":"no"}`),console.log(`[DEBUG] - this.particles.length: ${this.particles?this.particles.length:"undefined"}`),console.log(`[DEBUG] - this.scene exists: ${this.scene?"yes":"no"}`),this.useCustomShaders&&console.log("[DEBUG] Using custom shader implementation"),console.log("[DEBUG] Attempting to recreate particle system..."),this.particleSystem){console.warn("[DEBUG] Cannot emit particles: system not ready");return}else if(this.recreationAttempted){console.warn("[DEBUG] Cannot emit particles: system not ready after previous recreation attempt");return}else if(this.recreationAttempted=!0,this.useCustomShaders?this.createParticleSystem():this.createParticleSystem2(),console.log("[DEBUG] Particle system recreation attempt complete"),this.useDynamicLighting&&(!this.flameLight||!this.ambientGlowLight)&&(console.log("[DEBUG] Attempting to recreate flame lights..."),this.createFlameLight()),!this.particleSystem||!this.particles.length){console.warn("[DEBUG] Cannot emit particles: system not ready after recreation attempt");return}}let e=new T(0,0,0),t=new T(0,0,-1);if(this.player&&this.player.isFirstPerson&&this.player.fpCamera){const s=this.player.fpCamera;if(s.getWorldPosition(e),s.getWorldDirection(t),e.add(new T(t.x*.5+.2,t.y*.5-.3,t.z*.5)),this.flameOrigin.copy(e),this.flameDirection.copy(t),this.useDynamicLighting&&(!this.flameLight||!this.ambientGlowLight)&&(console.log("[DEBUG] Lights missing but dynamic lighting enabled, creating now"),this.createFlameLight()),this.flameLight&&this.useDynamicLighting){this.flameLight.position.copy(e);const a=t.clone().multiplyScalar(2);this.flameLight.position.add(a),this.flameLight.updateMatrix(),this.flameLight.updateMatrixWorld(),this.ambientGlowLight&&(this.ambientGlowLight.position.copy(e),this.ambientGlowLight.updateMatrix(),this.ambientGlowLight.updateMatrixWorld())}this.debug&&console.log("[DEBUG] First-person flame direction:",this.flameDirection.x.toFixed(2),this.flameDirection.y.toFixed(2),this.flameDirection.z.toFixed(2))}else if(this.player&&this.player.model){this.model.updateMatrixWorld(!0);const s=new T;if(s.copy(this.nozzleTipPosition),s.applyMatrix4(this.model.matrixWorld),this.flameOrigin.copy(s),this.player.model.getWorldDirection(this.flameDirection),this.flameLight&&this.useDynamicLighting){this.flameLight.position.copy(s);const a=this.flameDirection.clone().multiplyScalar(2);this.flameLight.position.add(a),this.flameLight.updateMatrix(),this.flameLight.updateMatrixWorld(),this.ambientGlowLight&&(this.ambientGlowLight.position.copy(s),this.ambientGlowLight.updateMatrix(),this.ambientGlowLight.updateMatrixWorld())}this.debug&&console.log("[DEBUG] Third-person flame direction:",this.flameDirection.x.toFixed(2),this.flameDirection.y.toFixed(2),this.flameDirection.z.toFixed(2))}const i=15;let n=0;for(let s=0;s<this.particleCount&&n<i;s++){const a=this.particles[s];if(a.life>0)continue;n++,a.position.copy(this.flameOrigin);const o=.1,l=new T((Math.random()-.5)*o,(Math.random()-.5)*o+.05,(Math.random()-.5)*o),c=20+Math.random()*10;a.velocity.copy(this.flameDirection).normalize().multiplyScalar(c),a.velocity.add(l);const h=Math.floor(Math.random()*this.flameColors.length);a.color.copy(this.flameColors[h]),a.size=1+Math.random()*2,a.maxLife=1.5+Math.random()*1,a.life=a.maxLife,n===1&&this.debug&&console.log("[DEBUG] First particle position:",a.position.x.toFixed(2),a.position.y.toFixed(2),a.position.z.toFixed(2))}this.debug&&console.log("[DEBUG] Emitted",n,"particles")}updateEffects(e){if(this.particles||(console.error("[DEBUG] Particles array is undefined, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length){this.isFiring&&!this.emergencyAttempted&&(this.emergencyAttempted=!0,console.log("[DEBUG] No particle system available - trying emergency fallback"),this.createEmergencyParticleSystem()&&(this.useEmergencySystem=!0));return}if(this.useEmergencySystem){this.updateEmergencyParticles(e);return}if(this.particleSystem.geometry.attributes.lifetime){this.updateCustomShaderEffects(e);return}const t=this.particleSystem.geometry.attributes.position.array,i=this.particleSystem.geometry.attributes.color.array,n=this.particleSystem.geometry.attributes.size.array;let s=0,a=0,o=0,l=0,c=0;for(let h=0;h<this.particleCount;h++){const d=this.particles[h];if(d.life<=0)continue;s++,d.life-=e,d.position.addScaledVector(d.velocity,e),d.velocity.y+=1*e,d.velocity.multiplyScalar(.97);const u=d.position.distanceTo(this.flameOrigin);u>c&&(c=u),a+=d.position.x,o+=d.position.y,l+=d.position.z;const m=d.life/d.maxLife,g=h*3;m>.6?(i[g]=1,i[g+1]=.5+m*.5,i[g+2]=0):(i[g]=1,i[g+1]=.5*(m/.6),i[g+2]=0),t[g]=d.position.x,t[g+1]=d.position.y,t[g+2]=d.position.z,n[h]=d.size*(m<.3?m/.3:1)}if(this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.particleSystem.geometry.attributes.color.needsUpdate=!0,this.particleSystem.geometry.attributes.size.needsUpdate=!0,this.flameLight&&this.useDynamicLighting&&s>0){const h=Math.min(1,s/50);if(this.flameLight.intensity=this.isFiring?this.flameLightIntensity*h:Math.max(0,this.flameLight.intensity-e*2),this.isFiring){const d=(Math.random()-.5)*.3;this.flameLight.intensity*=1+d;const u=Math.random()>.7?.05:0,m=1+(Math.random()-.5)*.1;this.flameLight.color.setHSL(u,1,.5*m),Math.random()<.05&&console.log("[DEBUG] Flame light updated - intensity:",this.flameLight.intensity.toFixed(2),"color:",this.flameLight.color.getHexString())}if(s>10){const d=new T(a/s,o/s,l/s);if(this.flameLight.position.copy(d),this.flameLight.distance=Math.max(this.flameLightDistance,c*1.5),Math.random()<.05&&console.log("[DEBUG] Flame light position (particle center):",this.flameLight.position.x.toFixed(2),this.flameLight.position.y.toFixed(2),this.flameLight.position.z.toFixed(2)),this.lightDebugSphere&&(this.lightDebugSphere.position.copy(this.flameLight.position),this.lightDebugSphere.visible=this.isFiring),this.ambientGlowLight){const u=new T().copy(this.flameOrigin).lerp(d,.3);this.ambientGlowLight.position.copy(u),this.glowDebugSphere&&(this.glowDebugSphere.position.copy(this.ambientGlowLight.position),this.glowDebugSphere.visible=this.isFiring),this.ambientGlowLight.intensity=this.isFiring?this.ambientGlowIntensity*h*.8:Math.max(0,this.ambientGlowLight.intensity-e),this.ambientGlowLight.distance=Math.max(this.ambientGlowDistance,c*2.5),Math.random()<.05&&console.log("[DEBUG] Ambient glow intensity:",this.ambientGlowLight.intensity.toFixed(2),"distance:",this.ambientGlowLight.distance.toFixed(2))}this.isFiring&&!this.secondaryLights&&this.createSecondaryLights(),this.secondaryLights&&this.secondaryLights.length>0&&this.updateSecondaryLights(s,h)}}else this.flameLight&&console.log("[DEBUG] Flame light conditions not met:",this.useDynamicLighting?"Dynamic lighting on":"Dynamic lighting off","Active particles:",s);this.debug&&this.isFiring&&console.log(`Active particles: ${s}`)}startFire(){this.isFiring=!0,this.useDynamicLighting&&(!this.flameLight||!this.ambientGlowLight)&&(console.log("[DEBUG] Creating missing flame lights in startFire"),this.createFlameLight()),this.flameLight&&this.useDynamicLighting?(this.flameLight.intensity=this.flameLightIntensity,console.log("[DEBUG] Flame light enabled with intensity:",this.flameLightIntensity)):console.log("[DEBUG] Flame light not available:",this.flameLight?"Light exists":"No light",this.useDynamicLighting?"Dynamic lighting on":"Dynamic lighting off"),this.ambientGlowLight&&this.useDynamicLighting?(this.ambientGlowLight.intensity=this.ambientGlowIntensity,console.log("[DEBUG] Ambient glow light enabled with intensity:",this.ambientGlowIntensity)):console.log("[DEBUG] Ambient glow light not available:",this.ambientGlowLight?"Light exists":"No light"),this.debug&&console.log("Flamethrower: Started firing")}stopFire(){this.isFiring=!1,this.flameLight&&this.useDynamicLighting&&(this.flameLight.intensity=0),this.ambientGlowLight&&this.useDynamicLighting&&(this.ambientGlowLight.intensity=0),this.debug&&console.log("Flamethrower: Stopped firing")}cleanup(){if(super.cleanup(),this.secondaryLights){for(let e=0;e<this.secondaryLights.length;e++){const t=this.secondaryLights[e];t.light&&(t.light.parent&&t.light.parent.remove(t.light),t.light=null)}this.secondaryLights=null}this.debugSphere&&(this.debugSphere.parent&&this.debugSphere.parent.remove(this.debugSphere),this.debugSphere.geometry.dispose(),this.debugSphere.material.dispose(),this.debugSphere=null),this.debugLine&&(this.debugLine.geometry&&this.debugLine.geometry.dispose(),this.debugLine.material&&this.debugLine.material.dispose(),this.debugLine=null),this.lightDebugSphere&&(this.lightDebugSphere.parent&&this.lightDebugSphere.parent.remove(this.lightDebugSphere),this.lightDebugSphere.geometry.dispose(),this.lightDebugSphere.material.dispose(),this.lightDebugSphere=null),this.glowDebugSphere&&(this.glowDebugSphere.parent&&this.glowDebugSphere.parent.remove(this.glowDebugSphere),this.glowDebugSphere.geometry.dispose(),this.glowDebugSphere.material.dispose(),this.glowDebugSphere=null),this.flameLight&&(this.flameLight.parent&&this.flameLight.parent.remove(this.flameLight),this.flameLight=null),this.ambientGlowLight&&(this.ambientGlowLight.parent&&this.ambientGlowLight.parent.remove(this.ambientGlowLight),this.ambientGlowLight=null),this.particles=[]}createParticleSystem2(){console.log("[DEBUG] Creating particle system with custom shaders");const e=new Qe,t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount);for(let h=0;h<this.particleCount;h++)t[h*3]=0,t[h*3+1]=-1e3,t[h*3+2]=0,i[h*3]=1,i[h*3+1]=.5,i[h*3+2]=0,n[h]=0,s[h]=0,this.particles.push({position:new T(0,-1e3,0),velocity:new T,color:new Se(1,.5,0),size:0,life:0,maxLife:0});e.setAttribute("position",new Je(t,3)),e.setAttribute("color",new Je(i,3)),e.setAttribute("size",new Je(n,1)),e.setAttribute("lifetime",new Je(s,1));const a=this.createFlameTexture(),o=`
            attribute float size;
            attribute float lifetime;
            attribute vec3 color;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                vLifetime = lifetime;
                vColor = color;
                
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (350.0 / -mvPosition.z); // Increased from 300 to 350 for larger particles
                gl_Position = projectionMatrix * mvPosition;
            }
        `,l=`
            uniform sampler2D diffuseTexture;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                if (vLifetime <= 0.0) discard;
                
                vec4 texColor = texture2D(diffuseTexture, gl_PointCoord);
                
                // Boost brightness for emissive glow effect
                vec3 glowColor = vColor * 1.5; // Increased brightness by 50%
                
                // Apply additional glow effect based on lifetime
                glowColor += vec3(0.2, 0.05, 0.0) * vLifetime; // Add orange-ish highlight
                
                // Final color with alpha
                gl_FragColor = vec4(glowColor, texColor.a * min(vLifetime * 2.0, 1.0));
            }
        `,c=new jt({uniforms:{diffuseTexture:{value:a}},vertexShader:o,fragmentShader:l,transparent:!0,blending:2,depthWrite:!1});this.particleSystem=new vn(e,c),this.particleSystem.frustumCulled=!1,this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),console.log("[DEBUG] Custom shader particle system added to scene (effects array size:",this.effects.length,")")):console.error("[DEBUG] Cannot add particle system: scene is null")}updateCustomShaderEffects(e){if(this.particles||(console.error("[DEBUG] Particles array is undefined in updateCustomShaderEffects, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length)return;const t=this.particleSystem.geometry.attributes.position.array,i=this.particleSystem.geometry.attributes.color.array,n=this.particleSystem.geometry.attributes.size.array,s=this.particleSystem.geometry.attributes.lifetime.array;let a=0,o=0,l=0,c=0,h=0;for(let d=0;d<this.particleCount;d++){const u=this.particles[d];if(u.life<=0)continue;a++,u.life-=e,u.position.addScaledVector(u.velocity,e),u.velocity.y+=1*e,u.velocity.multiplyScalar(.97);const m=u.position.distanceTo(this.flameOrigin);m>h&&(h=m),o+=u.position.x,l+=u.position.y,c+=u.position.z;const g=u.life/u.maxLife,p=d*3;t[p]=u.position.x,t[p+1]=u.position.y,t[p+2]=u.position.z,g>.5?(i[p]=1,i[p+1]=.3+g*.7,i[p+2]=0):(i[p]=1,i[p+1]=.3*g*2,i[p+2]=0),n[d]=u.size*(g<.3?g/.3:1),s[d]=g}if(this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.particleSystem.geometry.attributes.color.needsUpdate=!0,this.particleSystem.geometry.attributes.size.needsUpdate=!0,this.particleSystem.geometry.attributes.lifetime.needsUpdate=!0,this.flameLight&&this.useDynamicLighting&&a>0){const d=Math.min(1,a/50);if(this.flameLight.intensity=this.isFiring?this.flameLightIntensity*d:Math.max(0,this.flameLight.intensity-e*2),this.isFiring){const u=(Math.random()-.5)*.3;this.flameLight.intensity*=1+u;const m=Math.random()>.7?.05:0,g=1+(Math.random()-.5)*.1;this.flameLight.color.setHSL(m,1,.5*g),Math.random()<.05&&console.log("[DEBUG] Flame light updated - intensity:",this.flameLight.intensity.toFixed(2),"color:",this.flameLight.color.getHexString())}if(a>10){const u=new T(o/a,l/a,c/a);if(this.flameLight.position.copy(u),this.flameLight.distance=Math.max(this.flameLightDistance,h*1.5),Math.random()<.05&&console.log("[DEBUG] Flame light position (particle center):",this.flameLight.position.x.toFixed(2),this.flameLight.position.y.toFixed(2),this.flameLight.position.z.toFixed(2)),this.lightDebugSphere&&(this.lightDebugSphere.position.copy(this.flameLight.position),this.lightDebugSphere.visible=this.isFiring),this.ambientGlowLight){const m=new T().copy(this.flameOrigin).lerp(u,.3);this.ambientGlowLight.position.copy(m),this.glowDebugSphere&&(this.glowDebugSphere.position.copy(this.ambientGlowLight.position),this.glowDebugSphere.visible=this.isFiring),this.ambientGlowLight.intensity=this.isFiring?this.ambientGlowIntensity*d*.8:Math.max(0,this.ambientGlowLight.intensity-e),Math.random()<.05&&console.log("[DEBUG] Ambient glow intensity:",this.ambientGlowLight.intensity.toFixed(2),"distance:",this.ambientGlowLight.distance.toFixed(2))}this.isFiring&&!this.secondaryLights&&this.createSecondaryLights(),this.secondaryLights&&this.secondaryLights.length>0&&this.updateSecondaryLights(a,d)}}else this.flameLight&&console.log("[DEBUG] Flame light conditions not met:",this.useDynamicLighting?"Dynamic lighting on":"Dynamic lighting off","Active particles:",a);this.debug&&this.isFiring&&console.log("[DEBUG] Active custom shader particles:",a)}createEmergencyParticleSystem(){console.log("[DEBUG] Creating emergency fallback particle system");try{const e=new Qe,t=[];for(let a=0;a<100;a++)t.push(0,0,0);const i=new Oe(t,3);e.setAttribute("position",i);const n=this.createFlameTexture(),s=new Mn({size:7,color:16742144,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1,blending:2,map:n});this.particleSystem=new vn(e,s),this.particleSystem.frustumCulled=!1,this.particles=[];for(let a=0;a<100;a++)this.particles.push({position:new T,velocity:new T,color:new Se(1,.7,.3),size:7,life:0,maxLife:0});return this.useDynamicLighting&&!this.flameLight&&(this.flameLight=new ki(16733440,0,this.flameLightDistance||15),this.flameLight.castShadow=!0,this.scene&&(this.scene.add(this.flameLight),this.effects.push(this.flameLight),console.log("[DEBUG] Emergency flame light added to scene"))),this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),console.log("[DEBUG] Emergency particle system added to scene"),!0):(console.error("[DEBUG] Cannot add emergency particle system: scene is null"),!1)}catch(e){return console.error("[DEBUG] Failed to create emergency particle system:",e),!1}}updateEmergencyParticles(e){if(this.particles||(console.error("[DEBUG] Particles array is undefined in updateEmergencyParticles, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length)return;const t=this.particleSystem.geometry.attributes.position.array;let i=new T(0,0,0),n=new T(0,0,-1);if(this.player&&this.player.isFirstPerson&&this.player.fpCamera){const o=this.player.fpCamera;o.getWorldPosition(i),o.getWorldDirection(n),i.add(new T(n.x*.5+.2,n.y*.5-.3,n.z*.5))}else if(this.player&&this.player.model){this.model.updateMatrixWorld(!0);const o=new T;o.copy(this.nozzleTipPosition),o.applyMatrix4(this.model.matrixWorld),i.copy(o),this.player.model.getWorldDirection(n)}let s=0,a=0;for(let o=0;o<this.particles.length;o++){const l=this.particles[o];if(l.life>0){l.life-=e,l.position.addScaledVector(l.velocity,e),l.velocity.y+=1*e;const c=o*3;t[c]=l.position.x,t[c+1]=l.position.y,t[c+2]=l.position.z,s++,a+=l.position.distanceTo(i)}if(this.isFiring&&l.life<=0&&s<30){l.position.copy(i);const c=20+Math.random()*10;l.velocity.copy(n).multiplyScalar(c),l.velocity.x+=(Math.random()-.5)*2,l.velocity.y+=(Math.random()-.5)*2+.5,l.velocity.z+=(Math.random()-.5)*2,l.maxLife=1+Math.random()*1,l.life=l.maxLife,s++}}if(this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.flameLight&&this.useDynamicLighting){const o=Math.min(1,s/20);if(this.flameLight.intensity=this.isFiring?this.flameLightIntensity*1.5*o:Math.max(0,this.flameLight.intensity-e*2),s>0){const l=n.clone().multiplyScalar(3);this.flameLight.position.copy(i).add(l);const c=(Math.random()-.5)*.4;if(this.flameLight.intensity*=1+c,Math.random()>.9){const h=Math.random()>.5?16724736:16742144;this.flameLight.color.set(h)}}}this.debug&&this.isFiring&&console.log(`[DEBUG] Active emergency particles: ${s}`)}createFlameLight(){if(console.log("[DEBUG] Creating flame light with color:",this.flameLightColor,"and distance:",this.flameLightDistance),!this.scene)if(console.error("[DEBUG] Cannot create flame light: scene is still null"),this.player&&this.player.scene)console.log("[DEBUG] Using player.scene fallback for light creation"),this.scene=this.player.scene;else if(this.player&&this.player.game&&this.player.game.scene)console.log("[DEBUG] Using player.game.scene fallback for light creation"),this.scene=this.player.game.scene;else{console.error("[DEBUG] No scene available for light creation, aborting");return}try{if(this.flameLight=new ki(this.flameLightColor,0,this.flameLightDistance,1),this.flameLight.castShadow=!0,this.flameLight.decay=1.5,this.flameLight.shadow.mapSize.width=1024,this.flameLight.shadow.mapSize.height=1024,this.flameLight.shadow.camera.near=.1,this.flameLight.shadow.camera.far=this.flameLightDistance,this.flameLight.shadow.bias=-.005,this.flameLight.position.copy(this.flameOrigin),console.log("[DEBUG] Flame light created successfully:",this.flameLight.uuid),this.scene){this.scene.add(this.flameLight),this.effects||(console.error("[DEBUG] Effects array is undefined, initializing"),this.effects=[]),this.effects.push(this.flameLight),console.log("[DEBUG] Checking scene materials for light interaction:");let e=0,t=0,i=0;this.scene.traverse(n=>{n.isMesh&&(e++,n.receiveShadow&&t++,n.castShadow&&i++,e<=5&&n.material&&console.log(`[DEBUG] Object material [${n.name||"unnamed"}]:`,"type:",n.material.type,"receiveShadow:",n.receiveShadow,"castShadow:",n.castShadow))}),console.log(`[DEBUG] Scene contains ${e} meshes, ${t} receive shadows, ${i} cast shadows`),console.log("[DEBUG] Flame light added to scene. Scene children:",this.scene.children.length)}else console.error("[DEBUG] Cannot add flame light: scene is null");try{console.log("[DEBUG] Creating ambient glow light with color:",this.ambientGlowColor,"and distance:",this.ambientGlowDistance),this.ambientGlowLight=new ki(this.ambientGlowColor,0,this.ambientGlowDistance,1),this.ambientGlowLight.castShadow=!1,this.ambientGlowLight.decay=1,this.ambientGlowLight.position.copy(this.flameOrigin),this.scene?(this.scene.add(this.ambientGlowLight),this.effects||(console.error("[DEBUG] Effects array is undefined, initializing"),this.effects=[]),this.effects.push(this.ambientGlowLight),console.log("[DEBUG] Ambient glow light added to scene. Total effects:",this.effects.length)):console.error("[DEBUG] Cannot add ambient glow light: scene is null")}catch(e){console.error("[DEBUG] Error creating ambient glow light:",e)}}catch(e){console.error("[DEBUG] Error creating flame light:",e)}console.log("[DEBUG] Light creation complete -","Flame light:",this.flameLight?"created":"failed","Ambient glow:",this.ambientGlowLight?"created":"failed")}enhanceSceneObjects(){console.log("[DEBUG] Enhancing scene objects for better light reception");let e=0;this.scene.traverse(t=>{t.isMesh&&(t.receiveShadow=!0,t.material&&(Array.isArray(t.material)?t.material.forEach(i=>this.enhanceMaterial(i)):this.enhanceMaterial(t.material),e++))}),console.log(`[DEBUG] Enhanced ${e} objects to receive lighting properly`)}enhanceMaterial(e){e&&e.type!=="MeshBasicMaterial"&&(e.needsUpdate=!0,(e.type==="MeshStandardMaterial"||e.type==="MeshPhysicalMaterial")&&(e.roughness>.95&&(e.roughness=.9),e.metalness<.05&&(e.metalness=.1)),(e.type==="MeshPhongMaterial"||e.type==="MeshLambertMaterial")&&(e.shininess=Math.max(e.shininess||0,10),e.specular=e.specular||new Se(1118481)))}createSecondaryLights(){if(!this.scene||!this.useDynamicLighting)return;console.log("[DEBUG] Creating secondary particle lights"),this.secondaryLights=[];const e=3;for(let t=0;t<e;t++){const i=new ki(this.flameLightColor,this.flameLightIntensity*.3,this.flameLightDistance*.6,1.5);i.castShadow=!1,i.position.copy(this.flameOrigin),this.scene.add(i),this.effects.push(i),this.secondaryLights.push({light:i,targetParticleIdx:Math.floor(Math.random()*this.particleCount),lifespan:0})}console.log(`[DEBUG] Created ${e} secondary particle lights`)}updateSecondaryLights(e,t){if(!(!this.secondaryLights||!this.isFiring))for(let i=0;i<this.secondaryLights.length;i++){const n=this.secondaryLights[i];if(n.lifespan-=.05,n.lifespan<=0){let a=0,o=!1;for(;!o&&a<20;){const l=Math.floor(Math.random()*this.particleCount),c=this.particles[l];c&&c.life>.5&&(n.targetParticleIdx=l,n.lifespan=.5+Math.random()*.5,o=!0),a++}!o&&this.flameLight&&(n.light.position.copy(this.flameLight.position),n.light.position.x+=(Math.random()-.5)*2,n.light.position.y+=(Math.random()-.5)*2,n.light.position.z+=(Math.random()-.5)*2)}const s=n.targetParticleIdx;if(s>=0&&s<this.particleCount){const a=this.particles[s];if(a&&a.life>0){n.light.position.copy(a.position);const o=a.life/a.maxLife;n.light.intensity=this.flameLightIntensity*.3*t*o;const l=.8+Math.random()*.4;n.light.intensity*=l,o>.6?n.light.color.set(16749824):n.light.color.set(16726016)}}}}}class Lu extends Dr{constructor(e,t={}){super(e,{eyeHeight:1.6,...t}),this.thirdPersonDistance=t.thirdPersonDistance||5,this.thirdPersonHeight=t.thirdPersonHeight||2,this.cameraTarget=new T,this.fpCamera=null,this.isFirstPerson=t.isFirstPerson||!1,this.weapon=null,this.isFiring=!1,this.isActive=!0,console.log("HumanPlayer constructor - first person mode:",this.isFirstPerson),this.setPhysics(new bu(t.physics||{})),this.setMovement(new Eu(t.movement||{})),this.setControls(new Tu({firstPersonMode:this.isFirstPerson,...t.controls||{}})),this.controls&&typeof this.controls.setCameraZoomCallback=="function"?this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this)):console.warn("HumanPlayer: controls.setCameraZoomCallback is not available"),this.init(),this.isFirstPerson&&(this.setupFirstPersonCamera(),this.toggleViewMode(!0),setTimeout(()=>{this.isActive&&this.isFirstPerson&&this.fpCamera&&this.game&&(console.log("Ensuring first-person camera is active after small delay"),this.game.setActiveCamera(this.fpCamera))},100))}init(){this.model=this.game.assetLoader.createHumanModel(),this.model.position.set(0,1,0),this.model.traverse(e=>{e instanceof Ie&&(e.castShadow=!0,e.receiveShadow=!0)}),this.scene.add(this.model),this.position.copy(this.model.position),console.log("Human model initialized at position:",this.model.position),this.updateCameraPosition(),this.initWeapon()}initWeapon(){this.isFirstPerson&&(this.weapon=new Au(this),console.log("Flamethrower weapon initialized"))}setupFirstPersonCamera(){if(console.log("Setting up first-person camera"),!this.model||!this.isActive){console.error("Cannot setup first-person camera: model not initialized or player not active");return}this.fpCamera||(this.fpCamera=new pt(75,window.innerWidth/window.innerHeight,.1,1e3),console.log("First-person camera created")),this.fpCamera.position.set(0,this.eyeHeight,0),this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.model.add(this.fpCamera),console.log("First-person camera added to model:",this.model.uuid),this.fpCamera.rotation.set(0,0,0),this.fpCamera.updateProjectionMatrix(),this.model.traverse(e=>{e.isMesh&&e.layers.set(1)}),this.fpCamera.layers.set(0),console.log("First-person camera setup complete"),this.isFirstPerson&&this.game&&typeof this.game.setActiveCamera=="function"&&(console.log("Setting first-person camera as active after setup"),this.game.setActiveCamera(this.fpCamera),this.createFirstPersonVisuals())}handleMouseDown(e){super.handleMouseDown(e),this.isFirstPerson&&this.weapon&&e.button===0&&this.startFiring()}handleMouseUp(e){super.handleMouseUp(e),this.isFirstPerson&&this.weapon&&e.button===0&&this.stopFiring()}startFiring(){this.weapon&&(this.isFiring=!0,this.weapon.startFire(),console.log("Started firing weapon"))}stopFiring(){this.weapon&&(this.isFiring=!1,this.weapon.stopFire(),console.log("Stopped firing weapon"))}update(e){if(!this.model||!this.isActive){console.warn("HumanPlayer update: model not initialized or player not active");return}super.update(e);const t=this.controls?this.controls.getInput():null;t&&t.firstPersonMode!==this.isFirstPerson&&(console.log("View mode change detected in input, toggling view"),this.toggleViewMode(t.firstPersonMode)),this.isFirstPerson?this.fpCamera&&t&&this.updateFirstPersonCamera(t.lookDirection):this.updateCameraPosition(),this.weapon&&this.weapon.update(e)}updateFirstPersonCamera(e){if(!this.fpCamera||!this.isActive){console.warn("Cannot update first-person camera: fpCamera is null or player not active");return}if(!e){console.warn("Cannot update first-person camera: lookDirection is null");return}const t=new $i(e.y,e.x,0,"YXZ");this.fpCamera.rotation.copy(t),this.model&&(this.model.rotation.y=e.x)}toggleViewMode(e){this.isFirstPerson===e||!this.isActive||(this.isFirstPerson=e,console.log("Toggling view mode to:",e?"first-person":"third-person"),this.controls&&typeof this.controls.updateViewMode=="function"&&this.controls.updateViewMode(this.isFirstPerson),this.isFirstPerson?this.weapon?this.weapon&&this.weapon.attachToPlayer():this.initWeapon():this.isFiring&&this.stopFiring(),this.isFirstPerson?(this.fpCamera?(this.fpCamera.parent!==this.model&&this.model&&(this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.model.add(this.fpCamera),console.log("Reattached camera to model")),this.fpCamera.position.set(0,this.eyeHeight,0),this.fpCamera.rotation.set(0,0,0),this.fpCamera.updateMatrixWorld(!0),this.fpCamera.layers.set(0),this.game&&typeof this.game.setActiveCamera=="function"&&(this.game.setActiveCamera(this.fpCamera),console.log("Switched to first-person camera"),console.log("FP Camera position:",this.fpCamera.position),console.log("FP Camera rotation:",this.fpCamera.rotation),console.log("FP Camera parent:",this.fpCamera.parent?this.fpCamera.parent.uuid:"none"))):this.setupFirstPersonCamera(),this.model&&this.model.traverse(t=>{t.isMesh&&t.layers.set(1)})):(this.game.camera&&(this.game.setActiveCamera(this.game.camera),console.log("Switched to third-person camera")),this.model&&this.model.traverse(t=>{t.isMesh&&t.layers.set(0)})))}adjustCameraDistance(e){this.isFirstPerson||!this.isActive||(this.thirdPersonDistance+=e*.5,this.thirdPersonDistance=Math.max(2,Math.min(10,this.thirdPersonDistance)))}updateCameraPosition(){if(!this.model||this.isFirstPerson||!this.isActive)return;const e=this.controls?this.controls.cameraOrbit:{cameraAngle:0,cameraAngleY:0},t=new T(Math.sin(e.cameraAngle)*this.thirdPersonDistance,this.thirdPersonHeight+Math.sin(e.cameraAngleY)*this.thirdPersonDistance,Math.cos(e.cameraAngle)*this.thirdPersonDistance);this.camera.position.copy(this.model.position).add(t),this.cameraTarget.copy(this.model.position).add(new T(0,this.eyeHeight,0)),this.camera.lookAt(this.cameraTarget)}onInstructionsDismissed(){super.onInstructionsDismissed(),this.isFirstPerson&&this.isActive&&(console.log("Reinitializing first-person camera after instructions dismissed"),this.fpCamera||this.setupFirstPersonCamera(),this.toggleViewMode(!0),setTimeout(()=>{this.isActive&&this.isFirstPerson&&this.fpCamera&&this.game&&(console.log("Ensuring first-person camera is active after delay"),this.game.setActiveCamera(this.fpCamera))},50))}cleanup(){console.log("HumanPlayer cleanup"),this.isActive=!1,this.fpCamera&&(this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.fpCamera=null),this.weapon&&(this.weapon.cleanup(),this.weapon=null),super.cleanup()}createFirstPersonVisuals(){if(!this.isFirstPerson||!this.fpCamera||this.fpVisuals)return;const e=new kt(.1,.1,.5),t=new Yt({color:8947848});this.fpVisuals=new Ie(e,t),this.fpVisuals.position.set(.2,-.2,-.5),this.fpCamera.add(this.fpVisuals),console.log("Added first-person visuals")}removeFirstPersonVisuals(){this.fpVisuals&&this.fpCamera&&(this.fpCamera.remove(this.fpVisuals),this.fpVisuals=null,console.log("Removed first-person visuals"))}}class Du{constructor(e){this.scene=e,this.entities=[]}addEntity(e){this.entities.push(e),e.mesh&&this.scene.add(e.mesh)}removeEntity(e){const t=this.entities.indexOf(e);t!==-1&&(this.entities.splice(t,1),e.mesh&&this.scene.remove(e.mesh))}update(e){for(const t of this.entities)t.update&&t.update(e)}}class Pu{constructor(){this.gravity=9.8,this.timestep=1/60,this.shadowDarkness=.98,this.shadowSharpness=.98}checkCollision(e,t){var l,c;const i=e.position||((l=e.mesh)==null?void 0:l.position),n=t.position||((c=t.mesh)==null?void 0:c.position);if(!i||!n)return!1;const s=e.radius||.5,a=t.radius||.5;return i.distanceTo(n)<s+a}calculateArcTrajectory(e,t,i){const n=[],s=e.clone(),a=t.clone();for(let o=0;o<i&&(a.y-=this.gravity*this.timestep,s.add(a.clone().multiplyScalar(this.timestep)),n.push(s.clone()),!(s.y<=0));o++);return n}calculateBounce(e,t,i=.8){if(!e||!t)return null;const n=e.clone().normalize(),s=t.clone().normalize(),a=n.dot(s);return n.sub(s.multiplyScalar(2*a)).multiplyScalar(i)}configureShadowsForContrast(e){if(!(!e||!e.castShadow)){if(e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-5e-4,e.shadow.normalBias=.02,e.shadow.hasOwnProperty("darkness")&&(e.shadow.darkness=this.shadowDarkness),e.shadow.hasOwnProperty("radius")&&(e.shadow.radius=1-this.shadowSharpness),e.isDirectionalLight){const t=e.shadow.camera;t.near=.5,t.far=100;const i=30;t.left=-30,t.right=i,t.top=i,t.bottom=-30,t.updateProjectionMatrix()}else e.isSpotLight?(e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.fov=30,e.shadow.camera.updateProjectionMatrix()):e.isPointLight&&(e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.updateProjectionMatrix());return e}}enhanceMaterialForShadows(e){if(e)return e.needsUpdate=!0,e.type==="MeshStandardMaterial"||e.type==="MeshPhysicalMaterial"?(e.roughness<.7&&(e.roughness=Math.min(e.roughness*1.2,.95)),e.metalness>.2&&(e.metalness=Math.max(e.metalness*.8,.05)),e.hasOwnProperty("shadowSide")&&(e.shadowSide=0)):(e.type==="MeshLambertMaterial"||e.type==="MeshPhongMaterial")&&e.shininess&&(e.shininess=Math.max(e.shininess*.8,5)),e.receiveShadow=!0,e}applyContrastEnhancedShadows(e){e&&e.traverse(t=>{t.isLight&&t.castShadow&&this.configureShadowsForContrast(t),t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.material&&(Array.isArray(t.material)?t.material.forEach(i=>this.enhanceMaterialForShadows(i)):this.enhanceMaterialForShadows(t.material)))})}}class Ru{constructor(e){this.scene=e,this.entities=new Du(e),this.physics=new Pu,this.init()}init(){this.addLights(),this.createGround(),this.createHills(),this.addStars(),this.createTallObjects(),this.physics.applyContrastEnhancedShadows(this.scene)}addLights(){const e=new mu(263176,.03);this.scene.add(e),this.moonLight=new pu(11189247,1.6),this.moonLight.position.set(15,30,20),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.width=2048,this.moonLight.shadow.mapSize.height=2048,this.moonLight.shadow.camera.near=.5,this.moonLight.shadow.camera.far=100,this.moonLight.shadow.camera.left=-30,this.moonLight.shadow.camera.right=30,this.moonLight.shadow.camera.top=30,this.moonLight.shadow.camera.bottom=-30,this.moonLight.shadow.bias=-5e-4,this.moonLight.shadow.normalBias=.02,this.moonLight.shadow.darkness=.95,this.scene.add(this.moonLight);const t=new ki(3359914,.1,50);t.position.set(-10,5,-10),this.scene.add(t),this.createMoon()}createMoon(){const e=new si(3,16,16),t=new Yt({color:16777215,emissive:11184895,emissiveIntensity:.4});this.moon=new Ie(e,t);const i=80;this.moon.position.set(this.moonLight.position.x*(i/this.moonLight.position.length()),this.moonLight.position.y*(i/this.moonLight.position.length()),this.moonLight.position.z*(i/this.moonLight.position.length()));const n=new si(4,16,16),s=new Yt({color:11189247,transparent:!0,opacity:.25,side:1}),a=new Ie(n,s);this.moon.add(a),this.scene.add(this.moon)}createGround(){const i=new _u(100,100,526344,131586);i.position.y=.01,this.scene.add(i);const n=new Sn(100,100),s=new Nt({color:658962,roughness:.95,metalness:.15,transparent:!0,opacity:.9,receiveShadow:!0}),a=new Ie(n,s);a.rotation.x=-Math.PI/2,a.position.y=0,a.receiveShadow=!0,this.scene.add(a)}createHills(){const e=[1122867,2241348,3359829];for(let t=0;t<12;t++){const i=(Math.random()-.5)*80,n=(Math.random()-.5)*80,s=Math.random()*10+5,a=Math.random()*4+1,o=Math.floor(Math.random()*3)+3,l=1,c=new Xi(s,a,o,l,!0),h=Math.floor(Math.random()*e.length),d=new Nt({color:e[h],flatShading:!0,roughness:.9,metalness:.05}),u=new Ie(c,d);u.position.set(i,a/2,n),u.rotation.y=Math.random()*Math.PI,u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u)}}addStars(){const e=new Qe,t=new Mn({color:16777215,size:.15,sizeAttenuation:!0}),i=[],n=[];for(let a=0;a<4e3;a++){const o=(Math.random()-.5)*200,l=Math.random()*100+10,c=(Math.random()-.5)*200;i.push(o,l,c),Math.random()>.8?n.push(.8,.9,1):Math.random()>.7?n.push(1,.8,.8):n.push(1,1,1)}e.setAttribute("position",new Oe(i,3)),e.setAttribute("color",new Oe(n,3)),t.vertexColors=!0;const s=new vn(e,t);this.scene.add(s)}createTallObjects(){for(let e=0;e<6;e++){const t=(Math.random()-.5)*60,i=(Math.random()-.5)*60,n=5+Math.random()*3,s=.3+Math.random()*.2,a=new Ei(s,s*1.2,n,8),o=new Nt({color:4465152,roughness:.95,metalness:.05}),l=new Ie(a,o);l.position.set(t,n/2,i),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l);const c=n*1.5,h=n*.7,d=new Xi(h,c,8),u=new Nt({color:1127185,roughness:.9,metalness:.05}),m=new Ie(d,u);m.position.set(t,n+c/2,i),m.castShadow=!0,m.receiveShadow=!0,this.scene.add(m)}for(let e=0;e<3;e++){const t=(Math.random()-.5)*40,i=(Math.random()-.5)*40,n=1+Math.random()*2,s=8+Math.random()*7,a=1+Math.random()*2,o=new kt(n,s,a),l=new Nt({color:6710903,roughness:.75,metalness:.25}),c=new Ie(o,l);c.position.set(t,s/2,i),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c)}for(let e=0;e<8;e++){const t=(Math.random()-.5)*50,i=(Math.random()-.5)*50,n=.5+Math.random()*1.5,s=new us(n,0),a=new Nt({color:2236962,flatShading:!0,roughness:.95,metalness:.05}),o=new Ie(s,a);o.position.set(t,n*.5,i),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o)}}update(e){if(this.entities.update(e),this.moon&&this.moonLight){const t=.05*e;this.moon.position.applyAxisAngle(new T(0,1,0),t);const i=new T().copy(this.moon.position).normalize();this.moonLight.position.copy(i.multiplyScalar(40))}}}class Fu{constructor(e){this.containerId=e,this.scene=null,this.camera=null,this.renderer=null,this.clock=new gu,this.world=null,this.player=null,this.inputManager=null,this.assetLoader=null,this.container=null,this.gameMode="third_person",this._isTogglingMode=!1,this.init()}init(){const e=document.getElementById(this.containerId);if(!e){console.error(`Container with ID '${this.containerId}' not found`);return}this.container=e,e.style.backgroundColor="#050520",this.setupRenderer(e);try{this.assetLoader=new xu,this.world=new Ru(this.scene),this.setupInputManager(e),window.addEventListener("resize",()=>this.handleResize()),document.addEventListener("fullscreenchange",()=>this.handleResize()),this.handleResize(),this.animate()}catch(t){console.error("Error initializing game:",t)}}setupRenderer(e){this.scene=new ru,this.scene.background=new Se(328992),this.camera=new pt(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,5,5),this.renderer=new ls({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=3001,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("[DEBUG] Renderer initialized with shadows:",this.renderer.shadowMap.enabled),e.appendChild(this.renderer.domElement)}setupInputManager(e){this.inputManager=new vu(this,e),this.inputManager.addInstructions(e),this.createNewPlayer()}createPlayer(){this.createNewPlayer()}createNewPlayer(){this.player&&this.player.cleanup();try{this.gameMode==="first_person"?(console.log("Creating first-person player"),this.player=new Lu(this,{isFirstPerson:!0,physics:{gravity:9.8},movement:{movementSpeed:5},controls:{sensitivity:.002,invertY:!1,firstPersonMode:!0}}),this.player.fpCamera&&setTimeout(()=>{this.player&&this.player.isFirstPerson&&this.player.fpCamera&&(console.log("Ensuring first-person camera is active"),this.setActiveCamera(this.player.fpCamera))},50)):(console.log("Creating third-person player"),this.player=new wu(this,{physics:{gravity:7.5},movement:{movementSpeed:7},controls:{sensitivity:.0025}})),console.log("Player created:",this.gameMode),this.inputManager&&this.inputManager.instructions&&this.inputManager.instructions.style.display==="none"&&(console.log("Auto-initializing player controls"),this.player.onInstructionsDismissed())}catch(e){console.error("Error creating player:",e)}}switchPlayerMode(){const e=this.gameMode,t=this.gameMode==="first_person"?"third_person":"first_person";return this.gameMode=t,console.log(`Switching player mode from ${e} to ${this.gameMode}`),this._isTogglingMode?(console.warn("Already toggling mode, ignoring redundant request"),this.gameMode):(this._isTogglingMode=!0,this.player?(document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),setTimeout(()=>{this.player.cleanup(),this.createNewPlayer(),this.gameMode==="first_person"&&this.player&&setTimeout(()=>{this.container&&document.pointerLockElement!==this.container&&(console.log("Requesting pointer lock after switching to first-person mode"),this.container.requestPointerLock())},100),this.inputManager&&(this.inputManager.isFirstPerson=this.gameMode==="first_person"),setTimeout(()=>{this._isTogglingMode=!1},500)},50)):(this.createNewPlayer(),setTimeout(()=>{this._isTogglingMode=!1},500)),this.gameMode)}handleResize(){if(!this.container||!this.camera||!this.renderer)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.player&&this.player.fpCamera&&(this.player.fpCamera.aspect=e/t,this.player.fpCamera.updateProjectionMatrix()),console.log("Resized renderer and camera:",e,"x",t)}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();this.world&&this.world.update(e),this.player&&this.player.update(e),this.scene&&this.camera&&this.renderer&&this.renderer.render(this.scene,this.camera)}setActiveCamera(e){if(!e){console.error("setActiveCamera: camera is null or undefined");return}console.log("Setting active camera:",e.type,e.uuid),this.camera=e,this.container?(e.aspect=this.container.clientWidth/this.container.clientHeight,e.updateProjectionMatrix(),console.log("Updated camera aspect ratio:",e.aspect)):console.warn("Cannot update camera aspect ratio: container is null")}}const Ir="modular-202503191853";console.log(`Jackalope Planet ${Ir} loaded`);console.log("🚀 THIS IS A TEST UPDATE TO VERIFY CHANGES");window.testJackalope={version:Ir,games:[],runTests:function(){var t,i,n,s;console.group("Jackalope Planet Tests"),console.log("Testing version:",this.version);const r=document.querySelectorAll(".jackalope-planet-canvas-container");console.log("Game instances found:",r.length);const e=window.currentMode||"unknown";return console.log("Current mode:",e),r.forEach(a=>{a.querySelector("canvas")?console.log("Renderer active:",a.id):console.warn("No renderer found in:",a.id)}),this.version.includes("modular")&&(console.log("Testing modular branch features..."),console.log("Player physics system available:",typeof((i=(t=this.games[0])==null?void 0:t.player)==null?void 0:i.physics)<"u"),console.log("Modular control system available:",typeof((s=(n=this.games[0])==null?void 0:n.player)==null?void 0:s.controls)<"u")),console.groupEnd(),"Tests complete - check console for results"}};document.addEventListener("DOMContentLoaded",()=>{console.log("MODULAR BRANCH: Jackalope Planet initializing"),console.log("This is the modular branch version");const r=document.querySelectorAll(".jackalope-planet-canvas-container");console.log(`Found ${r.length} jackalope-planet containers`);const e=[];r.forEach(n=>{const s=n.getAttribute("id");if(s){console.log(`Initializing game in container: ${s}`);const a=new Fu(s);e.push(a),window.testJackalope.games.push(a);const o=document.createElement("div");o.className="first-person-cursor",o.id=`${s}-fp-cursor`,document.body.appendChild(o)}else console.error("Container without ID found, skipping")});let t=!1,i="third_person";r.forEach(n=>{const s=document.createElement("div");s.className="jackalope-controls-info",s.innerHTML="Press <strong>T</strong> to toggle first/third person view",s.style.position="absolute",s.style.bottom="10px",s.style.left="10px",s.style.color="white",s.style.backgroundColor="rgba(0,0,0,0.5)",s.style.padding="5px 10px",s.style.borderRadius="4px",s.style.fontSize="14px",s.style.zIndex="10",n.appendChild(s)}),window.addEventListener("keydown",n=>{if((n.key==="t"||n.key==="T")&&!t){const s=i==="third_person"?"first_person":"third_person";console.log(`Global T key pressed, switching player mode to ${s}`),t=!0,document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),i=s,document.querySelectorAll(".first-person-cursor").forEach(a=>{a.style.display=s==="first_person"?"block":"none"}),setTimeout(()=>{e.forEach(a=>{if(typeof a.switchPlayerMode=="function"){const o=a.gameMode;if(o!==s){const l=a.switchPlayerMode();console.log(`Game switched to ${l} mode`)}else console.log(`Game already in ${o} mode, no switch needed`)}}),setTimeout(()=>{t=!1},1e3)},100)}}),document.addEventListener("pointerlockchange",()=>{const n=!!document.pointerLockElement,s=i==="first_person";document.querySelectorAll(".first-person-cursor").forEach(a=>{a.style.display=n&&s?"block":"none"})})});

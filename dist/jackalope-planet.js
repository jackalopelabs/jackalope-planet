/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $i="150";const Dt="srgb",Un="srgb-linear",Qs="display-p3";const as="300 es";class Sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ls=1234567;const Nn=Math.PI/180,fi=180/Math.PI;function bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[e&255]+Qe[e>>8&255]+"-"+Qe[e>>16&15|64]+Qe[e>>24&255]+"-"+Qe[t&63|128]+Qe[t>>8&255]+"-"+Qe[t>>16&255]+Qe[t>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function Ki(r,e){return(r%e+e)%e}function Pr(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Dr(r,e,t){return r!==e?(t-r)/(e-r):0}function Bn(r,e,t){return(1-t)*r+t*e}function Rr(r,e,t,n){return Bn(r,e,1-Math.exp(-t*n))}function Fr(r,e=1){return e-Math.abs(Ki(r,e*2)-e)}function Ir(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zr(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Nr(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Br(r,e){return r+Math.random()*(e-r)}function Ur(r){return r*(.5-Math.random())}function Or(r){r!==void 0&&(ls=r);let e=ls+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gr(r){return r*Nn}function kr(r){return r*fi}function Yi(r){return(r&r-1)===0&&r!==0}function Vr(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function er(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wr(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*m,o*l);break;case"YXY":r.set(c*m,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Et={DEG2RAD:Nn,RAD2DEG:fi,generateUUID:bn,clamp:dt,euclideanModulo:Ki,mapLinear:Pr,inverseLerp:Dr,lerp:Bn,damp:Rr,pingpong:Fr,smoothstep:Ir,smootherstep:zr,randInt:Nr,randFloat:Br,randFloatSpread:Ur,seededRandom:Or,degToRad:Gr,radToDeg:kr,isPowerOfTwo:Yi,ceilPowerOfTwo:Vr,floorPowerOfTwo:er,setQuaternionFromProperEuler:Wr,normalize:ut,denormalize:Fn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],v=i[6],w=i[1],y=i[4],S=i[7],E=i[2],L=i[5],F=i[8];return s[0]=a*p+o*w+c*E,s[3]=a*f+o*y+c*L,s[6]=a*v+o*S+c*F,s[1]=l*p+h*w+d*E,s[4]=l*f+h*y+d*L,s[7]=l*v+h*S+d*F,s[2]=u*p+m*w+g*E,s[5]=u*f+m*y+g*L,s[8]=u*v+m*S+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,m=l*s-a*c,g=t*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*l-h*n)*p,e[2]=(o*n-i*a)*p,e[3]=u*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Si.makeScale(e,t)),this}rotate(e){return this.premultiply(Si.makeRotation(-e)),this}translate(e,t){return this.premultiply(Si.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Si=new at;function tr(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function On(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class sn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||c!==u||l!==m||h!==g){let f=1-o;const v=c*u+l*m+h*g+d*p,w=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const E=Math.sqrt(y),L=Math.atan2(E,v*w);f=Math.sin(f*L)/E,o=Math.sin(o*L)/E}const S=o*w;if(c=c*f+u*S,l=l*f+m*S,h=h*f+g*S,d=d*f+p*S,f===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*m-l*u,e[t+1]=c*g+h*u+l*d-o*m,e[t+2]=l*g+h*m+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-s*i,d=c*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=l*c+u*-s+h*-o-d*-a,this.y=h*c+u*-a+d*-s-l*-o,this.z=d*c+u*-o+l*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bi.copy(this).projectOnVector(e),this.sub(bi)}reflect(e){return this.sub(bi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bi=new C,cs=new sn;function Mn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Hr=new at().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qr=new at().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ht=new C;function Xr(r){return r.convertSRGBToLinear(),Ht.set(r.r,r.g,r.b).applyMatrix3(qr),r.setRGB(Ht.x,Ht.y,Ht.z)}function Yr(r){return Ht.set(r.r,r.g,r.b).applyMatrix3(Hr),r.setRGB(Ht.x,Ht.y,Ht.z).convertLinearToSRGB()}const jr={[Un]:r=>r,[Dt]:r=>r.convertSRGBToLinear(),[Qs]:Xr},Zr={[Un]:r=>r,[Dt]:r=>r.convertLinearToSRGB(),[Qs]:Yr},rt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Un},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=jr[e],i=Zr[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let on;class nr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{on===void 0&&(on=On("canvas")),on.width=e.width,on.height=e.height;const n=on.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=on}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=On("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Mn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ir{constructor(e=null){this.isSource=!0,this.uuid=bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ti(i[a].image)):s.push(Ti(i[a]))}else s=Ti(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ti(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $r=0;class lt extends Sn{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=lt.DEFAULT_ANISOTROPY,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=bn(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=300;lt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],p=c[2],f=c[6],v=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(m+1)/2,E=(v+1)/2,L=(h+u)/4,F=(d+p)/4,x=(g+f)/4;return y>S&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=L/n,s=F/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=L/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=F/s,i=x/s),this.set(n,i,s,t),this}let w=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(d-p)/w,this.z=(u-h)/w,this.w=Math.acos((l+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tn extends Sn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ir(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],d=e[c+1],u=e[c+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),d=e.getY(c),u=e.getZ(c);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Zt.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Zt)}else n.boundingBox===null&&n.computeBoundingBox(),Ei.copy(n.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(En),qn.subVectors(this.max,En),an.subVectors(e.a,En),ln.subVectors(e.b,En),cn.subVectors(e.c,En),Gt.subVectors(ln,an),kt.subVectors(cn,ln),$t.subVectors(an,cn);let t=[0,-Gt.z,Gt.y,0,-kt.z,kt.y,0,-$t.z,$t.y,Gt.z,0,-Gt.x,kt.z,0,-kt.x,$t.z,0,-$t.x,-Gt.y,Gt.x,0,-kt.y,kt.x,0,-$t.y,$t.x,0];return!Ci(t,an,ln,cn,qn)||(t=[1,0,0,0,1,0,0,0,1],!Ci(t,an,ln,cn,qn))?!1:(Xn.crossVectors(Gt,kt),t=[Xn.x,Xn.y,Xn.z],Ci(t,an,ln,cn,qn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(It[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),It[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),It[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),It[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),It[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),It[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),It[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),It[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(It),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const It=[new C,new C,new C,new C,new C,new C,new C,new C],Zt=new C,Ei=new Vn,an=new C,ln=new C,cn=new C,Gt=new C,kt=new C,$t=new C,En=new C,qn=new C,Xn=new C,Kt=new C;function Ci(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Kt.fromArray(r,s);const o=i.x*Math.abs(Kt.x)+i.y*Math.abs(Kt.y)+i.z*Math.abs(Kt.z),c=e.dot(Kt),l=t.dot(Kt),h=n.dot(Kt);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Jr=new Vn,Cn=new C,Ai=new C;class Wn{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jr.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cn.subVectors(e,this.center);const t=Cn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Cn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ai.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cn.copy(e.center).add(Ai)),this.expandByPoint(Cn.copy(e.center).sub(Ai))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zt=new C,Li=new C,Yn=new C,Vt=new C,Pi=new C,jn=new C,Di=new C;class Ji{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zt.copy(this.origin).addScaledVector(this.direction,t),zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Li.copy(e).add(t).multiplyScalar(.5),Yn.copy(t).sub(e).normalize(),Vt.copy(this.origin).sub(Li);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yn),o=Vt.dot(this.direction),c=-Vt.dot(Yn),l=Vt.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Li).addScaledVector(Yn,u),m}intersectSphere(e,t){zt.subVectors(e.center,this.origin);const n=zt.dot(this.direction),i=zt.dot(zt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zt)!==null}intersectTriangle(e,t,n,i,s){Pi.subVectors(t,e),jn.subVectors(n,e),Di.crossVectors(Pi,jn);let a=this.direction.dot(Di),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vt.subVectors(this.origin,e);const c=o*this.direction.dot(jn.crossVectors(Vt,jn));if(c<0)return null;const l=o*this.direction.dot(Pi.cross(Vt));if(l<0||c+l>a)return null;const h=-o*Vt.dot(Di);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,h,d,u,m,g,p,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=c,v[2]=l,v[6]=h,v[10]=d,v[14]=u,v[3]=m,v[7]=g,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hn.setFromMatrixColumn(e,0).length(),s=1/hn.setFromMatrixColumn(e,1).length(),a=1/hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*d,g=o*h,p=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=u-p*l,t[9]=-o*c,t[2]=p-u*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,m=c*d,g=l*h,p=l*d;t[0]=u+p*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=p+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,m=c*d,g=l*h,p=l*d;t[0]=u-p*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=p-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,m=a*d,g=o*h,p=o*d;t[0]=c*h,t[4]=g*l-m,t[8]=u*l+p,t[1]=c*d,t[5]=p*l+u,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=p-u*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+g,t[10]=u-p*d}else if(e.order==="XZY"){const u=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+p,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qr,e,eo)}lookAt(e,t,n){const i=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),Wt.crossVectors(n,mt),Wt.lengthSq()===0&&(Math.abs(n.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),Wt.crossVectors(n,mt)),Wt.normalize(),Zn.crossVectors(mt,Wt),i[0]=Wt.x,i[4]=Zn.x,i[8]=mt.x,i[1]=Wt.y,i[5]=Zn.y,i[9]=mt.y,i[2]=Wt.z,i[6]=Zn.z,i[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],v=n[14],w=n[3],y=n[7],S=n[11],E=n[15],L=i[0],F=i[4],x=i[8],T=i[12],P=i[1],X=i[5],W=i[9],N=i[13],D=i[2],G=i[6],Y=i[10],K=i[14],H=i[3],J=i[7],j=i[11],fe=i[15];return s[0]=a*L+o*P+c*D+l*H,s[4]=a*F+o*X+c*G+l*J,s[8]=a*x+o*W+c*Y+l*j,s[12]=a*T+o*N+c*K+l*fe,s[1]=h*L+d*P+u*D+m*H,s[5]=h*F+d*X+u*G+m*J,s[9]=h*x+d*W+u*Y+m*j,s[13]=h*T+d*N+u*K+m*fe,s[2]=g*L+p*P+f*D+v*H,s[6]=g*F+p*X+f*G+v*J,s[10]=g*x+p*W+f*Y+v*j,s[14]=g*T+p*N+f*K+v*fe,s[3]=w*L+y*P+S*D+E*H,s[7]=w*F+y*X+S*G+E*J,s[11]=w*x+y*W+S*Y+E*j,s[15]=w*T+y*N+S*K+E*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],p=e[7],f=e[11],v=e[15];return g*(+s*c*d-i*l*d-s*o*u+n*l*u+i*o*m-n*c*m)+p*(+t*c*m-t*l*u+s*a*u-i*a*m+i*l*h-s*c*h)+f*(+t*l*d-t*o*m-s*a*d+n*a*m+s*o*h-n*l*h)+v*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],p=e[13],f=e[14],v=e[15],w=d*f*l-p*u*l+p*c*m-o*f*m-d*c*v+o*u*v,y=g*u*l-h*f*l-g*c*m+a*f*m+h*c*v-a*u*v,S=h*p*l-g*d*l+g*o*m-a*p*m-h*o*v+a*d*v,E=g*d*c-h*p*c-g*o*u+a*p*u+h*o*f-a*d*f,L=t*w+n*y+i*S+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=w*F,e[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*v-n*u*v)*F,e[2]=(o*f*s-p*c*s+p*i*l-n*f*l-o*i*v+n*c*v)*F,e[3]=(d*c*s-o*u*s-d*i*l+n*u*l+o*i*m-n*c*m)*F,e[4]=y*F,e[5]=(h*f*s-g*u*s+g*i*m-t*f*m-h*i*v+t*u*v)*F,e[6]=(g*c*s-a*f*s-g*i*l+t*f*l+a*i*v-t*c*v)*F,e[7]=(a*u*s-h*c*s+h*i*l-t*u*l-a*i*m+t*c*m)*F,e[8]=S*F,e[9]=(g*d*s-h*p*s-g*n*m+t*p*m+h*n*v-t*d*v)*F,e[10]=(a*p*s-g*o*s+g*n*l-t*p*l-a*n*v+t*o*v)*F,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*m-t*o*m)*F,e[12]=E*F,e[13]=(h*p*i-g*d*i+g*n*u-t*p*u-h*n*f+t*d*f)*F,e[14]=(g*o*i-a*p*i-g*n*c+t*p*c+a*n*f-t*o*f)*F,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,m=s*h,g=s*d,p=a*h,f=a*d,v=o*d,w=c*l,y=c*h,S=c*d,E=n.x,L=n.y,F=n.z;return i[0]=(1-(p+v))*E,i[1]=(m+S)*E,i[2]=(g-y)*E,i[3]=0,i[4]=(m-S)*L,i[5]=(1-(u+v))*L,i[6]=(f+w)*L,i[7]=0,i[8]=(g+y)*F,i[9]=(f-w)*F,i[10]=(1-(u+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=hn.set(i[0],i[1],i[2]).length();const a=hn.set(i[4],i[5],i[6]).length(),o=hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bt.copy(this);const l=1/s,h=1/a,d=1/o;return bt.elements[0]*=l,bt.elements[1]*=l,bt.elements[2]*=l,bt.elements[4]*=h,bt.elements[5]*=h,bt.elements[6]*=h,bt.elements[8]*=d,bt.elements[9]*=d,bt.elements[10]*=d,t.setFromRotationMatrix(bt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(a-s),d=(t+e)*c,u=(n+i)*l,m=(a+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hn=new C,bt=new Ie,Qr=new C(0,0,0),eo=new C(1,1,1),Wt=new C,Zn=new C,mt=new C,hs=new Ie,us=new sn;class Hn{constructor(e=0,t=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return us.setFromEuler(this),this.setFromQuaternion(us,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class rr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let to=0;const ds=new C,un=new sn,Nt=new Ie,$n=new C,An=new C,no=new C,io=new sn,fs=new C(1,0,0),ps=new C(0,1,0),ms=new C(0,0,1),so={type:"added"},gs={type:"removed"};class $e extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:to++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new C,t=new Hn,n=new sn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new at}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(fs,e)}rotateY(e){return this.rotateOnAxis(ps,e)}rotateZ(e){return this.rotateOnAxis(ms,e)}translateOnAxis(e,t){return ds.copy(e).applyQuaternion(this.quaternion),this.position.add(ds.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fs,e)}translateY(e){return this.translateOnAxis(ps,e)}translateZ(e){return this.translateOnAxis(ms,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$n.copy(e):$n.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),An.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nt.lookAt(An,$n,this.up):Nt.lookAt($n,An,this.up),this.quaternion.setFromRotationMatrix(Nt),i&&(Nt.extractRotation(i.matrixWorld),un.setFromRotationMatrix(Nt),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(so)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,e,no),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,io,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new C(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wt=new C,Bt=new C,Ri=new C,Ut=new C,dn=new C,fn=new C,_s=new C,Fi=new C,Ii=new C,zi=new C;class Ot{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wt.subVectors(e,t),i.cross(wt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wt.subVectors(i,t),Bt.subVectors(n,t),Ri.subVectors(e,t);const a=wt.dot(wt),o=wt.dot(Bt),c=wt.dot(Ri),l=Bt.dot(Bt),h=Bt.dot(Ri),d=a*l-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ut),Ut.x>=0&&Ut.y>=0&&Ut.x+Ut.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Ut),c.set(0,0),c.addScaledVector(s,Ut.x),c.addScaledVector(a,Ut.y),c.addScaledVector(o,Ut.z),c}static isFrontFacing(e,t,n,i){return wt.subVectors(n,t),Bt.subVectors(e,t),wt.cross(Bt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wt.subVectors(this.c,this.b),Bt.subVectors(this.a,this.b),wt.cross(Bt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ot.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;dn.subVectors(i,n),fn.subVectors(s,n),Fi.subVectors(e,n);const c=dn.dot(Fi),l=fn.dot(Fi);if(c<=0&&l<=0)return t.copy(n);Ii.subVectors(e,i);const h=dn.dot(Ii),d=fn.dot(Ii);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(dn,a);zi.subVectors(e,s);const m=dn.dot(zi),g=fn.dot(zi);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(fn,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return _s.subVectors(s,i),o=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(_s,o);const v=1/(f+p+u);return a=p*v,o=u*v,t.copy(n).addScaledVector(dn,a).addScaledVector(fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ro=0;class rn extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ro++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const or={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={h:0,s:0,l:0},Kn={h:0,s:0,l:0};function Ni(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Ki(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ni(a,s,e+1/3),this.g=Ni(a,s,e),this.b=Ni(a,s,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,rt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,rt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=or[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return rt.fromWorkingColorSpace(et.copy(this),e),dt(et.r*255,0,255)<<16^dt(et.g*255,0,255)<<8^dt(et.b*255,0,255)<<0}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(et.copy(this),t);const n=et.r,i=et.g,s=et.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(et.copy(this),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Dt){rt.fromWorkingColorSpace(et.copy(this),e);const t=et.r,n=et.g,i=et.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=n,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(Kn);const n=Bn(Tt.h,Kn.h,t),i=Bn(Tt.s,Kn.s,t),s=Bn(Tt.l,Kn.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const et=new Ee;Ee.NAMES=or;class pi extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ve=new C,Jn=new be;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXY(t,Jn.x,Jn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ar extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lr extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oo=0;const Mt=new Ie,Bi=new $e,pn=new C,gt=new Vn,Ln=new Vn,je=new C;class ct extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oo++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tr(e)?lr:ar)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return Bi.lookAt(e),Bi.updateMatrix(),this.applyMatrix4(Bi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pn).negate(),this.translate(pn.x,pn.y,pn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gt.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(gt.min,Ln.min),gt.expandByPoint(je),je.addVectors(gt.max,Ln.max),gt.expandByPoint(je)):(gt.expandByPoint(Ln.min),gt.expandByPoint(Ln.max))}gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)je.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(je));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)je.fromBufferAttribute(o,l),c&&(pn.fromBufferAttribute(e,l),je.add(pn)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<o;P++)l[P]=new C,h[P]=new C;const d=new C,u=new C,m=new C,g=new be,p=new be,f=new be,v=new C,w=new C;function y(P,X,W){d.fromArray(i,P*3),u.fromArray(i,X*3),m.fromArray(i,W*3),g.fromArray(a,P*2),p.fromArray(a,X*2),f.fromArray(a,W*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(N),w.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(N),l[P].add(v),l[X].add(v),l[W].add(v),h[P].add(w),h[X].add(w),h[W].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let P=0,X=S.length;P<X;++P){const W=S[P],N=W.start,D=W.count;for(let G=N,Y=N+D;G<Y;G+=3)y(n[G+0],n[G+1],n[G+2])}const E=new C,L=new C,F=new C,x=new C;function T(P){F.fromArray(s,P*3),x.copy(F);const X=l[P];E.copy(X),E.sub(F.multiplyScalar(F.dot(X))).normalize(),L.crossVectors(x,X);const N=L.dot(h[P])<0?-1:1;c[P*4]=E.x,c[P*4+1]=E.y,c[P*4+2]=E.z,c[P*4+3]=N}for(let P=0,X=S.length;P<X;++P){const W=S[P],N=W.start,D=W.count;for(let G=N,Y=N+D;G<Y;G+=3)T(n[G+0]),T(n[G+1]),T(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)je.fromBufferAttribute(e,t),je.normalize(),e.setXYZ(t,je.x,je.y,je.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*h;for(let v=0;v<h;v++)u[g++]=l[m++]}return new xt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xs=new Ie,Pt=new Ji,Qn=new Wn,vs=new C,Pn=new C,Dn=new C,Rn=new C,Ui=new C,ei=new C,ti=new be,ni=new be,ii=new be,Oi=new C,si=new C;class Je extends $e{constructor(e=new ct,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ei.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Ui.fromBufferAttribute(d,e),a?ei.addScaledVector(Ui,h):ei.addScaledVector(Ui.sub(t),h))}t.add(ei)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qn.copy(n.boundingSphere),Qn.applyMatrix4(s),Pt.copy(e.ray).recast(e.near),Qn.containsPoint(Pt.origin)===!1&&(Pt.intersectSphere(Qn,vs)===null||Pt.origin.distanceToSquared(vs)>(e.far-e.near)**2))||(xs.copy(s).invert(),Pt.copy(e.ray).applyMatrix4(xs),n.boundingBox!==null&&Pt.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,S=w;y<S;y+=3){const E=o.getX(y),L=o.getX(y+1),F=o.getX(y+2);a=ri(this,f,e,Pt,l,h,E,L,F),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const v=o.getX(p),w=o.getX(p+1),y=o.getX(p+2);a=ri(this,i,e,Pt,l,h,v,w,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,S=w;y<S;y+=3){const E=y,L=y+1,F=y+2;a=ri(this,f,e,Pt,l,h,E,L,F),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const v=p,w=p+1,y=p+2;a=ri(this,i,e,Pt,l,h,v,w,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function ao(r,e,t,n,i,s,a,o){let c;if(e.side===1?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===0,o),c===null)return null;si.copy(o),si.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(si);return l<t.near||l>t.far?null:{distance:l,point:si.clone(),object:r}}function ri(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,Pn),r.getVertexPosition(o,Dn),r.getVertexPosition(c,Rn);const l=ao(r,e,t,n,Pn,Dn,Rn,Oi);if(l){i&&(ti.fromBufferAttribute(i,a),ni.fromBufferAttribute(i,o),ii.fromBufferAttribute(i,c),l.uv=Ot.getUV(Oi,Pn,Dn,Rn,ti,ni,ii,new be)),s&&(ti.fromBufferAttribute(s,a),ni.fromBufferAttribute(s,o),ii.fromBufferAttribute(s,c),l.uv2=Ot.getUV(Oi,Pn,Dn,Rn,ti,ni,ii,new be));const h={a,b:o,c,normal:new C,materialIndex:0};Ot.getNormal(Pn,Dn,Rn,h.normal),l.face=h}return l}class qt extends ct{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function g(p,f,v,w,y,S,E,L,F,x,T){const P=S/F,X=E/x,W=S/2,N=E/2,D=L/2,G=F+1,Y=x+1;let K=0,H=0;const J=new C;for(let j=0;j<Y;j++){const fe=j*X-N;for(let B=0;B<G;B++){const $=B*P-W;J[p]=$*w,J[f]=fe*y,J[v]=D,l.push(J.x,J.y,J.z),J[p]=0,J[f]=0,J[v]=L>0?1:-1,h.push(J.x,J.y,J.z),d.push(B/F),d.push(1-j/x),K+=1}}for(let j=0;j<x;j++)for(let fe=0;fe<F;fe++){const B=u+fe+G*j,$=u+fe+G*(j+1),ne=u+(fe+1)+G*(j+1),z=u+(fe+1)+G*j;c.push(B,$,z),c.push($,ne,z),H+=6}o.addGroup(m,H,T),m+=H,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ot(r){const e={};for(let t=0;t<r.length;t++){const n=yn(r[t]);for(const i in n)e[i]=n[i]}return e}function lo(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cr(r){return r.getRenderTarget()===null&&r.outputEncoding===3001?Dt:Un}const co={clone:yn,merge:ot};var ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ho,this.fragmentShader=uo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yn(e.uniforms),this.uniformsGroups=lo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hr extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _t extends hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fi*2*Math.atan(Math.tan(Nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nn*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mn=-90,gn=1;class fo extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new _t(mn,gn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new _t(mn,gn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new _t(mn,gn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new _t(mn,gn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new _t(mn,gn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new _t(mn,gn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,c,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class ur extends lt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class po extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ur(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qt(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:yn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Je(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new fo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Gi=new C,mo=new C,go=new at;class Jt{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gi.subVectors(n,t).cross(mo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gi),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||go.getNormalMatrix(e),i=this.coplanarPoint(Gi).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new Wn,oi=new C;class Qi{constructor(e=new Jt,t=new Jt,n=new Jt,i=new Jt,s=new Jt,a=new Jt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],v=n[13],w=n[14],y=n[15];return t[0].setComponents(o-i,d-c,p-u,y-f).normalize(),t[1].setComponents(o+i,d+c,p+u,y+f).normalize(),t[2].setComponents(o+s,d+l,p+m,y+v).normalize(),t[3].setComponents(o-s,d-l,p-m,y-v).normalize(),t[4].setComponents(o-a,d-h,p-g,y-w).normalize(),t[5].setComponents(o+a,d+h,p+g,y+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oi.x=i.normal.x>0?e.max.x:e.min.x,oi.y=i.normal.y>0?e.max.y:e.min.y,oi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dr(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _o(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,m=h.updateRange;r.bindBuffer(d,l),m.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:a,remove:o,update:c}}class mi extends ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,m=[],g=[],p=[],f=[];for(let v=0;v<h;v++){const w=v*u-a;for(let y=0;y<l;y++){const S=y*d-s;g.push(S,-w,0),p.push(0,0,1),f.push(y/o),f.push(1-v/c)}}for(let v=0;v<c;v++)for(let w=0;w<o;w++){const y=w+l*v,S=w+l*(v+1),E=w+1+l*(v+1),L=w+1+l*v;m.push(y,S,L),m.push(S,E,L)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var xo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mo=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,So=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wo="vec3 transformed = vec3( position );",To=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eo=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Co=`#ifdef USE_IRIDESCENCE
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
#endif`,Ao=`#ifdef USE_BUMPMAP
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
#endif`,Lo=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Po=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Do=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ro=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Io=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,No=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bo=`#define PI 3.141592653589793
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
}`,Uo=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oo=`vec3 transformedNormal = objectNormal;
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
#endif`,Go=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ko=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Vo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ho="gl_FragColor = linearToOutputTexel( gl_FragColor );",qo=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xo=`#ifdef USE_ENVMAP
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
#endif`,Yo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jo=`#ifdef USE_ENVMAP
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
#endif`,Zo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$o=`#ifdef USE_ENVMAP
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
#endif`,Ko=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qo=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ea=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ta=`#ifdef USE_GRADIENTMAP
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
}`,na=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ia=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sa=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ra=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oa=`uniform bool receiveShadow;
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
#endif`,aa=`#if defined( USE_ENVMAP )
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
#endif`,la=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ca=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ha=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ua=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,da=`PhysicalMaterial material;
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
#endif`,fa=`struct PhysicalMaterial {
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
}`,pa=`
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
#endif`,ma=`#if defined( RE_IndirectDiffuse )
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
#endif`,ga=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_a=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xa=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,va=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ma=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ya=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sa=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ba=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wa=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ta=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ea=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ca=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Aa=`#ifdef USE_MORPHNORMALS
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
#endif`,La=`#ifdef USE_MORPHTARGETS
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
#endif`,Pa=`#ifdef USE_MORPHTARGETS
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
#endif`,Da=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ra=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Fa=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ia=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,za=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Na=`#ifdef USE_NORMALMAP
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
#endif`,Ba=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ua=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Oa=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ga=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ka=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Va=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wa=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ha=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qa=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xa=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ya=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ja=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Za=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$a=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ka=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ja=`float getShadowMask() {
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
}`,Qa=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,el=`#ifdef USE_SKINNING
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
#endif`,tl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nl=`#ifdef USE_SKINNING
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
#endif`,il=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ol=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,al=`#ifdef USE_TRANSMISSION
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
#endif`,ll=`#ifdef USE_TRANSMISSION
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
#endif`,cl=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hl=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ul=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ml=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_l=`uniform sampler2D t2D;
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
}`,xl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ml=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sl=`#include <common>
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
}`,bl=`#if DEPTH_PACKING == 3200
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
}`,wl=`#define DISTANCE
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
}`,Tl=`#define DISTANCE
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
}`,El=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Al=`uniform float scale;
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
}`,Ll=`uniform vec3 diffuse;
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
}`,Pl=`#include <common>
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
}`,Dl=`uniform vec3 diffuse;
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
}`,Rl=`#define LAMBERT
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
}`,Fl=`#define LAMBERT
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
}`,Il=`#define MATCAP
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
}`,zl=`#define MATCAP
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
}`,Nl=`#define NORMAL
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
}`,Bl=`#define NORMAL
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
}`,Ul=`#define PHONG
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
}`,Ol=`#define PHONG
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
}`,Gl=`#define STANDARD
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
}`,kl=`#define STANDARD
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
}`,Vl=`#define TOON
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
}`,Wl=`#define TOON
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
}`,Hl=`uniform float size;
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
}`,ql=`uniform vec3 diffuse;
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
}`,Xl=`#include <common>
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
}`,Yl=`uniform vec3 color;
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
}`,jl=`uniform float rotation;
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
}`,Zl=`uniform vec3 diffuse;
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
}`,ye={alphamap_fragment:xo,alphamap_pars_fragment:vo,alphatest_fragment:Mo,alphatest_pars_fragment:yo,aomap_fragment:So,aomap_pars_fragment:bo,begin_vertex:wo,beginnormal_vertex:To,bsdfs:Eo,iridescence_fragment:Co,bumpmap_pars_fragment:Ao,clipping_planes_fragment:Lo,clipping_planes_pars_fragment:Po,clipping_planes_pars_vertex:Do,clipping_planes_vertex:Ro,color_fragment:Fo,color_pars_fragment:Io,color_pars_vertex:zo,color_vertex:No,common:Bo,cube_uv_reflection_fragment:Uo,defaultnormal_vertex:Oo,displacementmap_pars_vertex:Go,displacementmap_vertex:ko,emissivemap_fragment:Vo,emissivemap_pars_fragment:Wo,encodings_fragment:Ho,encodings_pars_fragment:qo,envmap_fragment:Xo,envmap_common_pars_fragment:Yo,envmap_pars_fragment:jo,envmap_pars_vertex:Zo,envmap_physical_pars_fragment:aa,envmap_vertex:$o,fog_vertex:Ko,fog_pars_vertex:Jo,fog_fragment:Qo,fog_pars_fragment:ea,gradientmap_pars_fragment:ta,lightmap_fragment:na,lightmap_pars_fragment:ia,lights_lambert_fragment:sa,lights_lambert_pars_fragment:ra,lights_pars_begin:oa,lights_toon_fragment:la,lights_toon_pars_fragment:ca,lights_phong_fragment:ha,lights_phong_pars_fragment:ua,lights_physical_fragment:da,lights_physical_pars_fragment:fa,lights_fragment_begin:pa,lights_fragment_maps:ma,lights_fragment_end:ga,logdepthbuf_fragment:_a,logdepthbuf_pars_fragment:xa,logdepthbuf_pars_vertex:va,logdepthbuf_vertex:Ma,map_fragment:ya,map_pars_fragment:Sa,map_particle_fragment:ba,map_particle_pars_fragment:wa,metalnessmap_fragment:Ta,metalnessmap_pars_fragment:Ea,morphcolor_vertex:Ca,morphnormal_vertex:Aa,morphtarget_pars_vertex:La,morphtarget_vertex:Pa,normal_fragment_begin:Da,normal_fragment_maps:Ra,normal_pars_fragment:Fa,normal_pars_vertex:Ia,normal_vertex:za,normalmap_pars_fragment:Na,clearcoat_normal_fragment_begin:Ba,clearcoat_normal_fragment_maps:Ua,clearcoat_pars_fragment:Oa,iridescence_pars_fragment:Ga,output_fragment:ka,packing:Va,premultiplied_alpha_fragment:Wa,project_vertex:Ha,dithering_fragment:qa,dithering_pars_fragment:Xa,roughnessmap_fragment:Ya,roughnessmap_pars_fragment:ja,shadowmap_pars_fragment:Za,shadowmap_pars_vertex:$a,shadowmap_vertex:Ka,shadowmask_pars_fragment:Ja,skinbase_vertex:Qa,skinning_pars_vertex:el,skinning_vertex:tl,skinnormal_vertex:nl,specularmap_fragment:il,specularmap_pars_fragment:sl,tonemapping_fragment:rl,tonemapping_pars_fragment:ol,transmission_fragment:al,transmission_pars_fragment:ll,uv_pars_fragment:cl,uv_pars_vertex:hl,uv_vertex:ul,uv2_pars_fragment:dl,uv2_pars_vertex:fl,uv2_vertex:pl,worldpos_vertex:ml,background_vert:gl,background_frag:_l,backgroundCube_vert:xl,backgroundCube_frag:vl,cube_vert:Ml,cube_frag:yl,depth_vert:Sl,depth_frag:bl,distanceRGBA_vert:wl,distanceRGBA_frag:Tl,equirect_vert:El,equirect_frag:Cl,linedashed_vert:Al,linedashed_frag:Ll,meshbasic_vert:Pl,meshbasic_frag:Dl,meshlambert_vert:Rl,meshlambert_frag:Fl,meshmatcap_vert:Il,meshmatcap_frag:zl,meshnormal_vert:Nl,meshnormal_frag:Bl,meshphong_vert:Ul,meshphong_frag:Ol,meshphysical_vert:Gl,meshphysical_frag:kl,meshtoon_vert:Vl,meshtoon_frag:Wl,points_vert:Hl,points_frag:ql,shadow_vert:Xl,shadow_frag:Yl,sprite_vert:jl,sprite_frag:Zl},te={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}}},Rt={basic:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:ot([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:ot([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:ot([te.points,te.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:ot([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:ot([te.common,te.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:ot([te.sprite,te.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:ot([te.common,te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:ot([te.lights,te.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Rt.physical={uniforms:ot([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const ai={r:0,b:0,g:0};function $l(r,e,t,n,i,s,a){const o=new Ee(0);let c=s===!0?0:1,l,h,d=null,u=0,m=null;function g(f,v){let w=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y));const S=r.xr,E=S.getSession&&S.getSession();E&&E.environmentBlendMode==="additive"&&(y=null),y===null?p(o,c):y&&y.isColor&&(p(y,1),w=!0),(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===306)?(h===void 0&&(h=new Je(new qt(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:yn(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,F,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=y.encoding!==3001,(d!==y||u!==y.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new mi(2,2),new nn({name:"BackgroundMaterial",uniforms:yn(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=y.encoding!==3001,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,v){f.getRGB(ai,cr(r)),n.buffers.color.setClear(ai.r,ai.g,ai.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(o,c)},render:g}}function Kl(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=f(null);let l=c,h=!1;function d(D,G,Y,K,H){let J=!1;if(a){const j=p(K,Y,G);l!==j&&(l=j,m(l.object)),J=v(D,K,Y,H),J&&w(D,K,Y,H)}else{const j=G.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==j)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=j,J=!0)}H!==null&&t.update(H,34963),(J||h)&&(h=!1,x(D,G,Y,K),H!==null&&r.bindBuffer(34963,t.get(H).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,G,Y){const K=Y.wireframe===!0;let H=o[D.id];H===void 0&&(H={},o[D.id]=H);let J=H[G.id];J===void 0&&(J={},H[G.id]=J);let j=J[K];return j===void 0&&(j=f(u()),J[K]=j),j}function f(D){const G=[],Y=[],K=[];for(let H=0;H<i;H++)G[H]=0,Y[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:K,object:D,attributes:{},index:null}}function v(D,G,Y,K){const H=l.attributes,J=G.attributes;let j=0;const fe=Y.getAttributes();for(const B in fe)if(fe[B].location>=0){const ne=H[B];let z=J[B];if(z===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),ne===void 0||ne.attribute!==z||z&&ne.data!==z.data)return!0;j++}return l.attributesNum!==j||l.index!==K}function w(D,G,Y,K){const H={},J=G.attributes;let j=0;const fe=Y.getAttributes();for(const B in fe)if(fe[B].location>=0){let ne=J[B];ne===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const z={};z.attribute=ne,ne&&ne.data&&(z.data=ne.data),H[B]=z,j++}l.attributes=H,l.attributesNum=j,l.index=K}function y(){const D=l.newAttributes;for(let G=0,Y=D.length;G<Y;G++)D[G]=0}function S(D){E(D,0)}function E(D,G){const Y=l.newAttributes,K=l.enabledAttributes,H=l.attributeDivisors;Y[D]=1,K[D]===0&&(r.enableVertexAttribArray(D),K[D]=1),H[D]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),H[D]=G)}function L(){const D=l.newAttributes,G=l.enabledAttributes;for(let Y=0,K=G.length;Y<K;Y++)G[Y]!==D[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function F(D,G,Y,K,H,J){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(D,G,Y,H,J):r.vertexAttribPointer(D,G,Y,K,H,J)}function x(D,G,Y,K){if(n.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const H=K.attributes,J=Y.getAttributes(),j=G.defaultAttributeValues;for(const fe in J){const B=J[fe];if(B.location>=0){let $=H[fe];if($===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const ne=$.normalized,z=$.itemSize,le=t.get($);if(le===void 0)continue;const oe=le.buffer,ce=le.type,he=le.bytesPerElement;if($.isInterleavedBufferAttribute){const _e=$.data,we=_e.stride,Ce=$.offset;if(_e.isInstancedInterleavedBuffer){for(let Fe=0;Fe<B.locationSize;Fe++)E(B.location+Fe,_e.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Fe=0;Fe<B.locationSize;Fe++)S(B.location+Fe);r.bindBuffer(34962,oe);for(let Fe=0;Fe<B.locationSize;Fe++)F(B.location+Fe,z/B.locationSize,ce,ne,we*he,(Ce+z/B.locationSize*Fe)*he)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)E(B.location+_e,$.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<B.locationSize;_e++)S(B.location+_e);r.bindBuffer(34962,oe);for(let _e=0;_e<B.locationSize;_e++)F(B.location+_e,z/B.locationSize,ce,ne,z*he,z/B.locationSize*_e*he)}}else if(j!==void 0){const ne=j[fe];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(B.location,ne);break;case 3:r.vertexAttrib3fv(B.location,ne);break;case 4:r.vertexAttrib4fv(B.location,ne);break;default:r.vertexAttrib1fv(B.location,ne)}}}}L()}function T(){W();for(const D in o){const G=o[D];for(const Y in G){const K=G[Y];for(const H in K)g(K[H].object),delete K[H];delete G[Y]}delete o[D]}}function P(D){if(o[D.id]===void 0)return;const G=o[D.id];for(const Y in G){const K=G[Y];for(const H in K)g(K[H].object),delete K[H];delete G[Y]}delete o[D.id]}function X(D){for(const G in o){const Y=o[G];if(Y[D.id]===void 0)continue;const K=Y[D.id];for(const H in K)g(K[H].object),delete K[H];delete Y[D.id]}}function W(){N(),h=!0,l!==c&&(l=c,m(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:S,disableUnusedAttributes:L}}function Jl(r,e,t,n){const i=n.isWebGL2;let s;function a(l){s=l}function o(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=c}function Ql(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),v=r.getParameter(36348),w=r.getParameter(36349),y=u>0,S=a||e.has("OES_texture_float"),E=y&&S,L=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:L}}function ec(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Jt,o=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,v=r.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const w=s?0:n,y=w*4;let S=v.clippingState||null;c.value=S,S=h(g,u,y,m);for(let E=0;E!==y;++E)S[E]=t[E];v.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const v=m+p*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<v)&&(f=new Float32Array(v));for(let y=0,S=m;y!==p;++y,S+=4)a.copy(d[y]).applyMatrix4(w,o),a.normal.toArray(f,S),f[S+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function tc(r){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new po(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fr extends hr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vn=4,Ms=[.125,.215,.35,.446,.526,.582],en=20,ki=new fr,ys=new Ee;let Vi=null;const Qt=(1+Math.sqrt(5))/2,xn=1/Qt,Ss=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Qt,xn),new C(0,Qt,-xn),new C(xn,0,Qt),new C(-xn,0,Qt),new C(Qt,xn,0),new C(-Qt,xn,0)];class bs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vi=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Es(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ts(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vi),e.scissorTest=!1,li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vi=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=ws(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ws(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nc(s)),this._blurMaterial=ic(s,e,t)}return i}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,ki)}_sceneToCubeUV(e,t,n,i){const o=new _t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ys),h.toneMapping=0,h.autoClear=!1;const m=new pi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Je(new qt,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(ys),p=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(o.up.set(0,c[v],0),o.lookAt(l[v],0,0)):w===1?(o.up.set(0,0,c[v]),o.lookAt(0,l[v],0)):(o.up.set(0,c[v],0),o.lookAt(0,0,l[v]));const y=this._cubeSize;li(i,w*y,v>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Es()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ts());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;li(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ki)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ss[(i-1)%Ss.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Je(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*en-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):en;f>en&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${en}`);const v=[];let w=0;for(let F=0;F<en;++F){const x=F/p,T=Math.exp(-x*x/2);v.push(T),F===0?w+=T:F<f&&(w+=2*T)}for(let F=0;F<v.length;F++)v[F]=v[F]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const S=this._sizeLods[i],E=3*S*(i>y-vn?i-y+vn:0),L=4*(this._cubeSize-S);li(t,E,L,3*S,2*S),c.setRenderTarget(t),c.render(d,ki)}}function nc(r){const e=[],t=[],n=[];let i=r;const s=r-vn+1+Ms.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-vn?c=Ms[a-r+vn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,v=1,w=new Float32Array(p*g*m),y=new Float32Array(f*g*m),S=new Float32Array(v*g*m);for(let L=0;L<m;L++){const F=L%3*2/3-1,x=L>2?0:-1,T=[F,x,0,F+2/3,x,0,F+2/3,x+1,0,F,x,0,F+2/3,x+1,0,F,x+1,0];w.set(T,p*g*L),y.set(u,f*g*L);const P=[L,L,L,L,L,L];S.set(P,v*g*L)}const E=new ct;E.setAttribute("position",new xt(w,p)),E.setAttribute("uv",new xt(y,f)),E.setAttribute("faceIndex",new xt(S,v)),e.push(E),i>vn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ws(r,e,t){const n=new tn(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function li(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ic(r,e,t){const n=new Float32Array(en),i=new C(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:en,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:es(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ts(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:es(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Es(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function es(){return`

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
	`}function sc(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new bs(r)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new bs(r));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rc(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oc(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,v=p.length;f<v;f++)e.update(p[f],34962)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let y=0,S=w.length;y<S;y+=3){const E=w[y+0],L=w[y+1],F=w[y+2];u.push(E,L,L,F,F,E)}}else{const w=g.array;p=g.version;for(let y=0,S=w.length/3-1;y<S;y+=3){const E=y+0,L=y+1,F=y+2;u.push(E,L,L,F,F,E)}}const f=new(tr(u)?lr:ar)(u,1);f.version=p;const v=s.get(d);v&&e.remove(v),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function ac(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function h(u,m){r.drawElements(s,m,o,u*c),t.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,u*c,g),t.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d}function lc(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cc(r,e){return r[0]-e[0]}function hc(r,e){return Math.abs(e[1])-Math.abs(r[1])}function uc(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ze,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let G=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var m=G;f!==void 0&&f.texture.dispose();const y=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let T=0;y===!0&&(T=1),S===!0&&(T=2),E===!0&&(T=3);let P=h.attributes.position.count*T,X=1;P>e.maxTextureSize&&(X=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const W=new Float32Array(P*X*4*p),N=new sr(W,P,X,p);N.type=1015,N.needsUpdate=!0;const D=T*4;for(let Y=0;Y<p;Y++){const K=L[Y],H=F[Y],J=x[Y],j=P*X*4*Y;for(let fe=0;fe<K.count;fe++){const B=fe*D;y===!0&&(a.fromBufferAttribute(K,fe),W[j+B+0]=a.x,W[j+B+1]=a.y,W[j+B+2]=a.z,W[j+B+3]=0),S===!0&&(a.fromBufferAttribute(H,fe),W[j+B+4]=a.x,W[j+B+5]=a.y,W[j+B+6]=a.z,W[j+B+7]=0),E===!0&&(a.fromBufferAttribute(J,fe),W[j+B+8]=a.x,W[j+B+9]=a.y,W[j+B+10]=a.z,W[j+B+11]=J.itemSize===4?a.w:1)}}f={count:p,texture:N,size:new be(P,X)},s.set(h,f),h.addEventListener("dispose",G)}let v=0;for(let y=0;y<u.length;y++)v+=u[y];const w=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let S=0;S<g;S++)p[S]=[S,0];n[h.id]=p}for(let S=0;S<g;S++){const E=p[S];E[0]=S,E[1]=u[S]}p.sort(hc);for(let S=0;S<8;S++)S<g&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(cc);const f=h.morphAttributes.position,v=h.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const E=o[S],L=E[0],F=E[1];L!==Number.MAX_SAFE_INTEGER&&F?(f&&h.getAttribute("morphTarget"+S)!==f[L]&&h.setAttribute("morphTarget"+S,f[L]),v&&h.getAttribute("morphNormal"+S)!==v[L]&&h.setAttribute("morphNormal"+S,v[L]),i[S]=F,w+=F):(f&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),v&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const y=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function dc(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const pr=new lt,mr=new sr,gr=new Kr,_r=new ur,Cs=[],As=[],Ls=new Float32Array(16),Ps=new Float32Array(9),Ds=new Float32Array(4);function wn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cs[i];if(s===void 0&&(s=new Float32Array(i),Cs[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function We(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function He(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gi(r,e){let t=As[e];t===void 0&&(t=new Int32Array(e),As[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2fv(this.addr,e),He(t,e)}}function mc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(We(t,e))return;r.uniform3fv(this.addr,e),He(t,e)}}function gc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4fv(this.addr,e),He(t,e)}}function _c(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),He(t,e)}else{if(We(t,n))return;Ds.set(n),r.uniformMatrix2fv(this.addr,!1,Ds),He(t,n)}}function xc(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),He(t,e)}else{if(We(t,n))return;Ps.set(n),r.uniformMatrix3fv(this.addr,!1,Ps),He(t,n)}}function vc(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),He(t,e)}else{if(We(t,n))return;Ls.set(n),r.uniformMatrix4fv(this.addr,!1,Ls),He(t,n)}}function Mc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2iv(this.addr,e),He(t,e)}}function Sc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3iv(this.addr,e),He(t,e)}}function bc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4iv(this.addr,e),He(t,e)}}function wc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2uiv(this.addr,e),He(t,e)}}function Ec(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3uiv(this.addr,e),He(t,e)}}function Cc(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4uiv(this.addr,e),He(t,e)}}function Ac(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||pr,i)}function Lc(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gr,i)}function Pc(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_r,i)}function Dc(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mr,i)}function Rc(r){switch(r){case 5126:return fc;case 35664:return pc;case 35665:return mc;case 35666:return gc;case 35674:return _c;case 35675:return xc;case 35676:return vc;case 5124:case 35670:return Mc;case 35667:case 35671:return yc;case 35668:case 35672:return Sc;case 35669:case 35673:return bc;case 5125:return wc;case 36294:return Tc;case 36295:return Ec;case 36296:return Cc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ac;case 35679:case 36299:case 36307:return Lc;case 35680:case 36300:case 36308:case 36293:return Pc;case 36289:case 36303:case 36311:case 36292:return Dc}}function Fc(r,e){r.uniform1fv(this.addr,e)}function Ic(r,e){const t=wn(e,this.size,2);r.uniform2fv(this.addr,t)}function zc(r,e){const t=wn(e,this.size,3);r.uniform3fv(this.addr,t)}function Nc(r,e){const t=wn(e,this.size,4);r.uniform4fv(this.addr,t)}function Bc(r,e){const t=wn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Uc(r,e){const t=wn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Oc(r,e){const t=wn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gc(r,e){r.uniform1iv(this.addr,e)}function kc(r,e){r.uniform2iv(this.addr,e)}function Vc(r,e){r.uniform3iv(this.addr,e)}function Wc(r,e){r.uniform4iv(this.addr,e)}function Hc(r,e){r.uniform1uiv(this.addr,e)}function qc(r,e){r.uniform2uiv(this.addr,e)}function Xc(r,e){r.uniform3uiv(this.addr,e)}function Yc(r,e){r.uniform4uiv(this.addr,e)}function jc(r,e,t){const n=this.cache,i=e.length,s=gi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pr,s[a])}function Zc(r,e,t){const n=this.cache,i=e.length,s=gi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gr,s[a])}function $c(r,e,t){const n=this.cache,i=e.length,s=gi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_r,s[a])}function Kc(r,e,t){const n=this.cache,i=e.length,s=gi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||mr,s[a])}function Jc(r){switch(r){case 5126:return Fc;case 35664:return Ic;case 35665:return zc;case 35666:return Nc;case 35674:return Bc;case 35675:return Uc;case 35676:return Oc;case 5124:case 35670:return Gc;case 35667:case 35671:return kc;case 35668:case 35672:return Vc;case 35669:case 35673:return Wc;case 5125:return Hc;case 36294:return qc;case 36295:return Xc;case 36296:return Yc;case 35678:case 36198:case 36298:case 36306:case 35682:return jc;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return $c;case 36289:case 36303:case 36311:case 36292:return Kc}}class Qc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Rc(t.type)}}class eh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jc(t.type)}}class th{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Wi=/(\w+)(\])?(\[|\.)?/g;function Rs(r,e){r.seq.push(e),r.map[e.id]=e}function nh(r,e,t){const n=r.name,i=n.length;for(Wi.lastIndex=0;;){const s=Wi.exec(n),a=Wi.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Rs(t,l===void 0?new Qc(o,r,e):new eh(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new th(o),Rs(t,d)),t=d}}}class di{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);nh(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fs(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ih=0;function sh(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function rh(r){switch(r){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Is(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+sh(r.getShaderSource(e),a)}else return i}function oh(r,e){const t=rh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ah(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lh(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(In).join(`
`)}function ch(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hh(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function In(r){return r!==""}function zs(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ns(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uh=/^[ \t]*#include +<([\w\d./]+)>/gm;function ji(r){return r.replace(uh,dh)}function dh(r,e){const t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ji(t)}const fh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bs(r){return r.replace(fh,ph)}function ph(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Us(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mh(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function gh(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _h(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function xh(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function vh(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mh(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=mh(t),l=gh(t),h=_h(t),d=xh(t),u=vh(t),m=t.isWebGL2?"":lh(t),g=ch(s),p=i.createProgram();let f,v,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(In).join(`
`),f.length>0&&(f+=`
`),v=[m,g].filter(In).join(`
`),v.length>0&&(v+=`
`)):(f=[Us(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(In).join(`
`),v=[m,Us(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ye.tonemapping_pars_fragment:"",t.toneMapping!==0?ah("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ye.encodings_pars_fragment,oh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(In).join(`
`)),a=ji(a),a=zs(a,t),a=Ns(a,t),o=ji(o),o=zs(o,t),o=Ns(o,t),a=Bs(a),o=Bs(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===as?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===as?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=w+f+a,S=w+v+o,E=Fs(i,35633,y),L=Fs(i,35632,S);if(i.attachShader(p,E),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(E).trim(),X=i.getShaderInfoLog(L).trim();let W=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){W=!1;const D=Is(i,E,"vertex"),G=Is(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:P,prefix:f},fragmentShader:{log:X,prefix:v}})}i.deleteShader(E),i.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new di(i,p)),F};let x;return this.getAttributes=function(){return x===void 0&&(x=hh(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ih++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=L,this}let yh=0;class Sh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}}class bh{constructor(e){this.id=yh++,this.code=e,this.usedTimes=0}}function wh(r,e,t,n,i,s,a){const o=new rr,c=new Sh,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,T,P,X,W){const N=X.fog,D=W.geometry,G=x.isMeshStandardMaterial?X.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),K=Y&&Y.mapping===306?Y.image.height:null,H=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=J!==void 0?J.length:0;let fe=0;D.morphAttributes.position!==void 0&&(fe=1),D.morphAttributes.normal!==void 0&&(fe=2),D.morphAttributes.color!==void 0&&(fe=3);let B,$,ne,z;if(H){const we=Rt[H];B=we.vertexShader,$=we.fragmentShader}else B=x.vertexShader,$=x.fragmentShader,c.update(x),ne=c.getVertexShaderID(x),z=c.getFragmentShaderID(x);const le=r.getRenderTarget(),oe=x.alphaTest>0,ce=x.clearcoat>0,he=x.iridescence>0;return{isWebGL2:h,shaderID:H,shaderName:x.type,vertexShader:B,fragmentShader:$,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:le===null?r.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:3e3,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===1,tangentSpaceNormalMap:x.normalMapType===0,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===3001,clearcoat:ce,clearcoatMap:ce&&!!x.clearcoatMap,clearcoatRoughnessMap:ce&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!x.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!x.iridescenceMap,iridescenceThicknessMap:he&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===1,alphaMap:!!x.alphaMap,alphaTest:oe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:0,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(T,x),w(T,x),T.push(r.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function w(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),x.push(o.mask)}function y(x){const T=g[x.type];let P;if(T){const X=Rt[T];P=co.clone(X.uniforms)}else P=x.uniforms;return P}function S(x,T){let P;for(let X=0,W=l.length;X<W;X++){const N=l[X];if(N.cacheKey===T){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Mh(r,T,x,s),l.push(P)),P}function E(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function L(x){c.remove(x)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:L,programs:l,dispose:F}}function Th(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Eh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Os(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gs(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,m,g,p,f){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},r[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=m,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=p,v.group=f),e++,v}function o(d,u,m,g,p,f){const v=a(d,u,m,g,p,f);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function c(d,u,m,g,p,f){const v=a(d,u,m,g,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function l(d,u){t.length>1&&t.sort(d||Eh),n.length>1&&n.sort(u||Os),i.length>1&&i.sort(u||Os)}function h(){for(let d=e,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Ch(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Gs,r.set(n,[a])):i>=s.length?(a=new Gs,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ah(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Lh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ph=0;function Dh(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rh(r,e){const t=new Ah,n=Lh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,a=new Ie,o=new Ie;function c(h,d){let u=0,m=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,f=0,v=0,w=0,y=0,S=0,E=0,L=0,F=0,x=0;h.sort(Dh);const T=d===!0?Math.PI:1;for(let X=0,W=h.length;X<W;X++){const N=h[X],D=N.color,G=N.intensity,Y=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=D.r*G*T,m+=D.g*G*T,g+=D.b*G*T;else if(N.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],G);else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const J=N.shadow,j=n.get(N);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=N.shadow.matrix,S++}i.directional[p]=H,p++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(D).multiplyScalar(G*T),H.distance=Y,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[v]=H;const J=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,J.updateMatrices(N),N.castShadow&&x++),i.spotLightMatrix[v]=J.matrix,N.castShadow){const j=n.get(N);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=K,L++}v++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(D).multiplyScalar(G),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=H,w++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*T),H.distance=N.distance,H.decay=N.decay,N.castShadow){const J=N.shadow,j=n.get(N);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[f]=j,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=N.shadow.matrix,E++}i.point[f]=H,f++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(G*T),H.groundColor.copy(N.groundColor).multiplyScalar(G*T),i.hemi[y]=H,y++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==w||P.hemiLength!==y||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==L||P.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=w,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=L+F-x,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=x,P.directionalLength=p,P.pointLength=f,P.spotLength=v,P.rectAreaLength=w,P.hemiLength=y,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=L,P.numSpotMaps=F,i.version=Ph++)}function l(h,d){let u=0,m=0,g=0,p=0,f=0;const v=d.matrixWorldInverse;for(let w=0,y=h.length;w<y;w++){const S=h[w];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),u++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(v),o.identity(),a.copy(S.matrixWorld),a.premultiply(v),o.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(v),m++}else if(S.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(v),f++}}}return{setup:c,setupView:l,state:i}}function ks(r,e){const t=new Rh(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Fh(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new ks(r,e),t.set(s,[c])):a>=o.length?(c=new ks(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ih extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zh extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bh=`uniform sampler2D shadow_pass;
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
}`;function Uh(r,e,t){let n=new Qi;const i=new be,s=new be,a=new Ze,o=new Ih({depthPacking:3201}),c=new zh,l={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Nh,fragmentShader:Bh}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new ct;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Je(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(S,E,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const F=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let X=0,W=S.length;X<W;X++){const N=S[X],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const G=D.getFrameExtents();if(i.multiply(G),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,D.mapSize.y=s.y)),D.map===null){const K=this.type!==3?{minFilter:1003,magFilter:1003}:{};D.map=new tn(i.x,i.y,K),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const Y=D.getViewportCount();for(let K=0;K<Y;K++){const H=D.getViewport(K);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),P.viewport(a),D.updateMatrices(N,K),n=D.getFrustum(),y(E,L,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===3&&v(D,L),D.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(F,x,T)};function v(S,E){const L=e.update(p);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new tn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(E,null,L,u,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(E,null,L,m,p,null)}function w(S,E,L,F,x,T){let P=null;const X=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(X!==void 0)P=X;else if(P=L.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=P.uuid,N=E.uuid;let D=l[W];D===void 0&&(D={},l[W]=D);let G=D[N];G===void 0&&(G=P.clone(),D[N]=G),P=G}return P.visible=E.visible,P.wireframe=E.wireframe,T===3?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=F,P.farDistance=x),P}function y(S,E,L,F,x){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===3)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const X=e.update(S),W=S.material;if(Array.isArray(W)){const N=X.groups;for(let D=0,G=N.length;D<G;D++){const Y=N[D],K=W[Y.materialIndex];if(K&&K.visible){const H=w(S,K,F,L.near,L.far,x);r.renderBufferDirect(L,null,X,H,S,Y)}}}else if(W.visible){const N=w(S,W,F,L.near,L.far,x);r.renderBufferDirect(L,null,X,N,S,null)}}const P=S.children;for(let X=0,W=P.length;X<W;X++)y(P[X],E,L,F,x)}}function Oh(r,e,t){const n=t.isWebGL2;function i(){let A=!1;const O=new Ze;let Z=null;const se=new Ze(0,0,0,0);return{setMask:function(ae){Z!==ae&&!A&&(r.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){A=ae},setClear:function(ae,ze,Xe,it,At){At===!0&&(ae*=it,ze*=it,Xe*=it),O.set(ae,ze,Xe,it),se.equals(O)===!1&&(r.clearColor(ae,ze,Xe,it),se.copy(O))},reset:function(){A=!1,Z=null,se.set(-1,0,0,0)}}}function s(){let A=!1,O=null,Z=null,se=null;return{setTest:function(ae){ae?oe(2929):ce(2929)},setMask:function(ae){O!==ae&&!A&&(r.depthMask(ae),O=ae)},setFunc:function(ae){if(Z!==ae){switch(ae){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517);break;default:r.depthFunc(515)}Z=ae}},setLocked:function(ae){A=ae},setClear:function(ae){se!==ae&&(r.clearDepth(ae),se=ae)},reset:function(){A=!1,O=null,Z=null,se=null}}}function a(){let A=!1,O=null,Z=null,se=null,ae=null,ze=null,Xe=null,it=null,At=null;return{setTest:function(Oe){A||(Oe?oe(2960):ce(2960))},setMask:function(Oe){O!==Oe&&!A&&(r.stencilMask(Oe),O=Oe)},setFunc:function(Oe,vt,Lt){(Z!==Oe||se!==vt||ae!==Lt)&&(r.stencilFunc(Oe,vt,Lt),Z=Oe,se=vt,ae=Lt)},setOp:function(Oe,vt,Lt){(ze!==Oe||Xe!==vt||it!==Lt)&&(r.stencilOp(Oe,vt,Lt),ze=Oe,Xe=vt,it=Lt)},setLocked:function(Oe){A=Oe},setClear:function(Oe){At!==Oe&&(r.clearStencil(Oe),At=Oe)},reset:function(){A=!1,O=null,Z=null,se=null,ae=null,ze=null,Xe=null,it=null,At=null}}}const o=new i,c=new s,l=new a,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,v=!1,w=null,y=null,S=null,E=null,L=null,F=null,x=null,T=!1,P=null,X=null,W=null,N=null,D=null;const G=r.getParameter(35661);let Y=!1,K=0;const H=r.getParameter(7938);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=K>=2);let J=null,j={};const fe=r.getParameter(3088),B=r.getParameter(2978),$=new Ze().fromArray(fe),ne=new Ze().fromArray(B);function z(A,O,Z){const se=new Uint8Array(4),ae=r.createTexture();r.bindTexture(A,ae),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let ze=0;ze<Z;ze++)r.texImage2D(O+ze,0,6408,1,1,0,6408,5121,se);return ae}const le={};le[3553]=z(3553,3553,1),le[34067]=z(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),oe(2929),c.setFunc(3),ht(!1),nt(1),oe(2884),tt(0);function oe(A){u[A]!==!0&&(r.enable(A),u[A]=!0)}function ce(A){u[A]!==!1&&(r.disable(A),u[A]=!1)}function he(A,O){return m[A]!==O?(r.bindFramebuffer(A,O),m[A]=O,n&&(A===36009&&(m[36160]=O),A===36160&&(m[36009]=O)),!0):!1}function _e(A,O){let Z=p,se=!1;if(A)if(Z=g.get(O),Z===void 0&&(Z=[],g.set(O,Z)),A.isWebGLMultipleRenderTargets){const ae=A.texture;if(Z.length!==ae.length||Z[0]!==36064){for(let ze=0,Xe=ae.length;ze<Xe;ze++)Z[ze]=36064+ze;Z.length=ae.length,se=!0}}else Z[0]!==36064&&(Z[0]=36064,se=!0);else Z[0]!==1029&&(Z[0]=1029,se=!0);se&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function we(A){return f!==A?(r.useProgram(A),f=A,!0):!1}const Ce={100:32774,101:32778,102:32779};if(n)Ce[103]=32775,Ce[104]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ce[103]=A.MIN_EXT,Ce[104]=A.MAX_EXT)}const Fe={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function tt(A,O,Z,se,ae,ze,Xe,it){if(A===0){v===!0&&(ce(3042),v=!1);return}if(v===!1&&(oe(3042),v=!0),A!==5){if(A!==w||it!==T){if((y!==100||L!==100)&&(r.blendEquation(32774),y=100,L=100),it)switch(A){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,E=null,F=null,x=null,w=A,T=it}return}ae=ae||O,ze=ze||Z,Xe=Xe||se,(O!==y||ae!==L)&&(r.blendEquationSeparate(Ce[O],Ce[ae]),y=O,L=ae),(Z!==S||se!==E||ze!==F||Xe!==x)&&(r.blendFuncSeparate(Fe[Z],Fe[se],Fe[ze],Fe[Xe]),S=Z,E=se,F=ze,x=Xe),w=A,T=!1}function yt(A,O){A.side===2?ce(2884):oe(2884);let Z=A.side===1;O&&(Z=!Z),ht(Z),A.blending===1&&A.transparent===!1?tt(0):tt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),o.setMask(A.colorWrite);const se=A.stencilWrite;l.setTest(se),se&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ne(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(32926):ce(32926)}function ht(A){P!==A&&(A?r.frontFace(2304):r.frontFace(2305),P=A)}function nt(A){A!==0?(oe(2884),A!==X&&(A===1?r.cullFace(1029):A===2?r.cullFace(1028):r.cullFace(1032))):ce(2884),X=A}function Ue(A){A!==W&&(Y&&r.lineWidth(A),W=A)}function Ne(A,O,Z){A?(oe(32823),(N!==O||D!==Z)&&(r.polygonOffset(O,Z),N=O,D=Z)):ce(32823)}function Ct(A){A?oe(3089):ce(3089)}function St(A){A===void 0&&(A=33984+G-1),J!==A&&(r.activeTexture(A),J=A)}function b(A,O,Z){Z===void 0&&(J===null?Z=33984+G-1:Z=J);let se=j[Z];se===void 0&&(se={type:void 0,texture:void 0},j[Z]=se),(se.type!==A||se.texture!==O)&&(J!==Z&&(r.activeTexture(Z),J=Z),r.bindTexture(A,O||le[A]),se.type=A,se.texture=O)}function _(){const A=j[J];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(A){$.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),$.copy(A))}function de(A){ne.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),ne.copy(A))}function De(A,O){let Z=d.get(O);Z===void 0&&(Z=new WeakMap,d.set(O,Z));let se=Z.get(A);se===void 0&&(se=r.getUniformBlockIndex(O,A.name),Z.set(A,se))}function Be(A,O){const se=d.get(O).get(A);h.get(O)!==se&&(r.uniformBlockBinding(O,se,A.__bindingPointIndex),h.set(O,se))}function qe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,j={},m={},g=new WeakMap,p=[],f=null,v=!1,w=null,y=null,S=null,E=null,L=null,F=null,x=null,T=!1,P=null,X=null,W=null,N=null,D=null,$.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:oe,disable:ce,bindFramebuffer:he,drawBuffers:_e,useProgram:we,setBlending:tt,setMaterial:yt,setFlipSided:ht,setCullFace:nt,setLineWidth:Ue,setPolygonOffset:Ne,setScissorTest:Ct,activeTexture:St,bindTexture:b,unbindTexture:_,compressedTexImage2D:k,compressedTexImage3D:Q,texImage2D:ue,texImage3D:ve,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:q,texStorage3D:xe,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:pe,compressedTexSubImage3D:re,scissor:ge,viewport:de,reset:qe}}function Gh(r,e,t,n,i,s,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,_){return v?new OffscreenCanvas(b,_):On("canvas")}function y(b,_,k,Q){let ee=1;if((b.width>Q||b.height>Q)&&(ee=Q/Math.max(b.width,b.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=_?er:Math.floor,pe=ie(ee*b.width),re=ie(ee*b.height);p===void 0&&(p=w(pe,re));const q=k?w(pe,re):p;return q.width=pe,q.height=re,q.getContext("2d").drawImage(b,0,0,pe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+pe+"x"+re+")."),q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Yi(b.width)&&Yi(b.height)}function E(b){return o?!1:b.wrapS!==1001||b.wrapT!==1001||b.minFilter!==1003&&b.minFilter!==1006}function L(b,_){return b.generateMipmaps&&_&&b.minFilter!==1003&&b.minFilter!==1006}function F(b){r.generateMipmap(b)}function x(b,_,k,Q,ee=!1){if(o===!1)return _;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=_;return _===6403&&(k===5126&&(ie=33326),k===5131&&(ie=33325),k===5121&&(ie=33321)),_===33319&&(k===5126&&(ie=33328),k===5131&&(ie=33327),k===5121&&(ie=33323)),_===6408&&(k===5126&&(ie=34836),k===5131&&(ie=34842),k===5121&&(ie=Q===3001&&ee===!1?35907:32856),k===32819&&(ie=32854),k===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function T(b,_,k){return L(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function P(b){return b===1003||b===1004||b===1005?9728:9729}function X(b){const _=b.target;_.removeEventListener("dispose",X),N(_),_.isVideoTexture&&g.delete(_)}function W(b){const _=b.target;_.removeEventListener("dispose",W),G(_)}function N(b){const _=n.get(b);if(_.__webglInit===void 0)return;const k=b.source,Q=f.get(k);if(Q){const ee=Q[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(b),Object.keys(Q).length===0&&f.delete(k)}n.remove(b)}function D(b){const _=n.get(b);r.deleteTexture(_.__webglTexture);const k=b.source,Q=f.get(k);delete Q[_.__cacheKey],a.memory.textures--}function G(b){const _=b.texture,k=n.get(b),Q=n.get(_);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)r.deleteFramebuffer(k.__webglFramebuffer[ee]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ee]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ie=_.length;ee<ie;ee++){const pe=n.get(_[ee]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(_[ee])}n.remove(_),n.remove(b)}let Y=0;function K(){Y=0}function H(){const b=Y;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),Y+=1,b}function J(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.encoding),_.join()}function j(b,_){const k=n.get(b);if(b.isVideoTexture&&Ct(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(k,b,_);return}}t.bindTexture(3553,k.__webglTexture,33984+_)}function fe(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ce(k,b,_);return}t.bindTexture(35866,k.__webglTexture,33984+_)}function B(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ce(k,b,_);return}t.bindTexture(32879,k.__webglTexture,33984+_)}function $(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){he(k,b,_);return}t.bindTexture(34067,k.__webglTexture,33984+_)}const ne={1e3:10497,1001:33071,1002:33648},z={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function le(b,_,k){if(k?(r.texParameteri(b,10242,ne[_.wrapS]),r.texParameteri(b,10243,ne[_.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,ne[_.wrapR]),r.texParameteri(b,10240,z[_.magFilter]),r.texParameteri(b,10241,z[_.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(_.wrapS!==1001||_.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,P(_.magFilter)),r.texParameteri(b,10241,P(_.minFilter)),_.minFilter!==1003&&_.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(r.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function oe(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",X));const Q=_.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const ie=J(_);if(ie!==b.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ie].usedTimes++;const pe=ee[b.__cacheKey];pe!==void 0&&(ee[b.__cacheKey].usedTimes--,pe.usedTimes===0&&D(_)),b.__cacheKey=ie,b.__webglTexture=ee[ie].texture}return k}function ce(b,_,k){let Q=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=35866),_.isData3DTexture&&(Q=32879);const ee=oe(b,_),ie=_.source;t.bindTexture(Q,b.__webglTexture,33984+k);const pe=n.get(ie);if(ie.version!==pe.__version||ee===!0){t.activeTexture(33984+k),r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const re=E(_)&&S(_.image)===!1;let q=y(_.image,re,!1,h);q=St(_,q);const xe=S(q)||o,ue=s.convert(_.format,_.encoding);let ve=s.convert(_.type),ge=x(_.internalFormat,ue,ve,_.encoding,_.isVideoTexture);le(Q,_,xe);let de;const De=_.mipmaps,Be=o&&_.isVideoTexture!==!0,qe=pe.__version===void 0||ee===!0,A=T(_,q,xe);if(_.isDepthTexture)ge=6402,o?_.type===1015?ge=36012:_.type===1014?ge=33190:_.type===1020?ge=35056:ge=33189:_.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===1026&&ge===6402&&_.type!==1012&&_.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=1014,ve=s.convert(_.type)),_.format===1027&&ge===6402&&(ge=34041,_.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=1020,ve=s.convert(_.type))),qe&&(Be?t.texStorage2D(3553,1,ge,q.width,q.height):t.texImage2D(3553,0,ge,q.width,q.height,0,ue,ve,null));else if(_.isDataTexture)if(De.length>0&&xe){Be&&qe&&t.texStorage2D(3553,A,ge,De[0].width,De[0].height);for(let O=0,Z=De.length;O<Z;O++)de=De[O],Be?t.texSubImage2D(3553,O,0,0,de.width,de.height,ue,ve,de.data):t.texImage2D(3553,O,ge,de.width,de.height,0,ue,ve,de.data);_.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(3553,A,ge,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ue,ve,q.data)):t.texImage2D(3553,0,ge,q.width,q.height,0,ue,ve,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&qe&&t.texStorage3D(35866,A,ge,De[0].width,De[0].height,q.depth);for(let O=0,Z=De.length;O<Z;O++)de=De[O],_.format!==1023?ue!==null?Be?t.compressedTexSubImage3D(35866,O,0,0,0,de.width,de.height,q.depth,ue,de.data,0,0):t.compressedTexImage3D(35866,O,ge,de.width,de.height,q.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,O,0,0,0,de.width,de.height,q.depth,ue,ve,de.data):t.texImage3D(35866,O,ge,de.width,de.height,q.depth,0,ue,ve,de.data)}else{Be&&qe&&t.texStorage2D(3553,A,ge,De[0].width,De[0].height);for(let O=0,Z=De.length;O<Z;O++)de=De[O],_.format!==1023?ue!==null?Be?t.compressedTexSubImage2D(3553,O,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(3553,O,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,O,0,0,de.width,de.height,ue,ve,de.data):t.texImage2D(3553,O,ge,de.width,de.height,0,ue,ve,de.data)}else if(_.isDataArrayTexture)Be?(qe&&t.texStorage3D(35866,A,ge,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ue,ve,q.data)):t.texImage3D(35866,0,ge,q.width,q.height,q.depth,0,ue,ve,q.data);else if(_.isData3DTexture)Be?(qe&&t.texStorage3D(32879,A,ge,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ue,ve,q.data)):t.texImage3D(32879,0,ge,q.width,q.height,q.depth,0,ue,ve,q.data);else if(_.isFramebufferTexture){if(qe)if(Be)t.texStorage2D(3553,A,ge,q.width,q.height);else{let O=q.width,Z=q.height;for(let se=0;se<A;se++)t.texImage2D(3553,se,ge,O,Z,0,ue,ve,null),O>>=1,Z>>=1}}else if(De.length>0&&xe){Be&&qe&&t.texStorage2D(3553,A,ge,De[0].width,De[0].height);for(let O=0,Z=De.length;O<Z;O++)de=De[O],Be?t.texSubImage2D(3553,O,0,0,ue,ve,de):t.texImage2D(3553,O,ge,ue,ve,de);_.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(3553,A,ge,q.width,q.height),t.texSubImage2D(3553,0,0,0,ue,ve,q)):t.texImage2D(3553,0,ge,ue,ve,q);L(_,xe)&&F(Q),pe.__version=ie.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function he(b,_,k){if(_.image.length!==6)return;const Q=oe(b,_),ee=_.source;t.bindTexture(34067,b.__webglTexture,33984+k);const ie=n.get(ee);if(ee.version!==ie.__version||Q===!0){t.activeTexture(33984+k),r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const pe=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,q=[];for(let O=0;O<6;O++)!pe&&!re?q[O]=y(_.image[O],!1,!0,l):q[O]=re?_.image[O].image:_.image[O],q[O]=St(_,q[O]);const xe=q[0],ue=S(xe)||o,ve=s.convert(_.format,_.encoding),ge=s.convert(_.type),de=x(_.internalFormat,ve,ge,_.encoding),De=o&&_.isVideoTexture!==!0,Be=ie.__version===void 0||Q===!0;let qe=T(_,xe,ue);le(34067,_,ue);let A;if(pe){De&&Be&&t.texStorage2D(34067,qe,de,xe.width,xe.height);for(let O=0;O<6;O++){A=q[O].mipmaps;for(let Z=0;Z<A.length;Z++){const se=A[Z];_.format!==1023?ve!==null?De?t.compressedTexSubImage2D(34069+O,Z,0,0,se.width,se.height,ve,se.data):t.compressedTexImage2D(34069+O,Z,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+O,Z,0,0,se.width,se.height,ve,ge,se.data):t.texImage2D(34069+O,Z,de,se.width,se.height,0,ve,ge,se.data)}}}else{A=_.mipmaps,De&&Be&&(A.length>0&&qe++,t.texStorage2D(34067,qe,de,q[0].width,q[0].height));for(let O=0;O<6;O++)if(re){De?t.texSubImage2D(34069+O,0,0,0,q[O].width,q[O].height,ve,ge,q[O].data):t.texImage2D(34069+O,0,de,q[O].width,q[O].height,0,ve,ge,q[O].data);for(let Z=0;Z<A.length;Z++){const ae=A[Z].image[O].image;De?t.texSubImage2D(34069+O,Z+1,0,0,ae.width,ae.height,ve,ge,ae.data):t.texImage2D(34069+O,Z+1,de,ae.width,ae.height,0,ve,ge,ae.data)}}else{De?t.texSubImage2D(34069+O,0,0,0,ve,ge,q[O]):t.texImage2D(34069+O,0,de,ve,ge,q[O]);for(let Z=0;Z<A.length;Z++){const se=A[Z];De?t.texSubImage2D(34069+O,Z+1,0,0,ve,ge,se.image[O]):t.texImage2D(34069+O,Z+1,de,ve,ge,se.image[O])}}}L(_,ue)&&F(34067),ie.__version=ee.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function _e(b,_,k,Q,ee){const ie=s.convert(k.format,k.encoding),pe=s.convert(k.type),re=x(k.internalFormat,ie,pe,k.encoding);n.get(_).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,re,_.width,_.height,_.depth,0,ie,pe,null):t.texImage2D(ee,0,re,_.width,_.height,0,ie,pe,null)),t.bindFramebuffer(36160,b),Ne(_)?u.framebufferTexture2DMultisampleEXT(36160,Q,ee,n.get(k).__webglTexture,0,Ue(_)):(ee===3553||ee>=34069&&ee<=34074)&&r.framebufferTexture2D(36160,Q,ee,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(b,_,k){if(r.bindRenderbuffer(36161,b),_.depthBuffer&&!_.stencilBuffer){let Q=33189;if(k||Ne(_)){const ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===1015?Q=36012:ee.type===1014&&(Q=33190));const ie=Ue(_);Ne(_)?u.renderbufferStorageMultisampleEXT(36161,ie,Q,_.width,_.height):r.renderbufferStorageMultisample(36161,ie,Q,_.width,_.height)}else r.renderbufferStorage(36161,Q,_.width,_.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(_.depthBuffer&&_.stencilBuffer){const Q=Ue(_);k&&Ne(_)===!1?r.renderbufferStorageMultisample(36161,Q,35056,_.width,_.height):Ne(_)?u.renderbufferStorageMultisampleEXT(36161,Q,35056,_.width,_.height):r.renderbufferStorage(36161,34041,_.width,_.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<Q.length;ee++){const ie=Q[ee],pe=s.convert(ie.format,ie.encoding),re=s.convert(ie.type),q=x(ie.internalFormat,pe,re,ie.encoding),xe=Ue(_);k&&Ne(_)===!1?r.renderbufferStorageMultisample(36161,xe,q,_.width,_.height):Ne(_)?u.renderbufferStorageMultisampleEXT(36161,xe,q,_.width,_.height):r.renderbufferStorage(36161,q,_.width,_.height)}}r.bindRenderbuffer(36161,null)}function Ce(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Q=n.get(_.depthTexture).__webglTexture,ee=Ue(_);if(_.depthTexture.format===1026)Ne(_)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(_.depthTexture.format===1027)Ne(_)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const _=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=r.createRenderbuffer(),we(_.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),we(_.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function tt(b,_,k){const Q=n.get(b);_!==void 0&&_e(Q.__webglFramebuffer,b,b.texture,36064,3553),k!==void 0&&Fe(b)}function yt(b){const _=b.texture,k=n.get(b),Q=n.get(_);b.addEventListener("dispose",W),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=_.version,a.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,pe=S(b)||o;if(ee){k.__webglFramebuffer=[];for(let re=0;re<6;re++)k.__webglFramebuffer[re]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),ie)if(i.drawBuffers){const re=b.texture;for(let q=0,xe=re.length;q<xe;q++){const ue=n.get(re[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Ne(b)===!1){const re=ie?_:[_];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){const xe=re[q];k.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[q]);const ue=s.convert(xe.format,xe.encoding),ve=s.convert(xe.type),ge=x(xe.internalFormat,ue,ve,xe.encoding,b.isXRRenderTarget===!0),de=Ue(b);r.renderbufferStorageMultisample(36161,de,ge,b.width,b.height),r.framebufferRenderbuffer(36160,36064+q,36161,k.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),we(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),le(34067,_,pe);for(let re=0;re<6;re++)_e(k.__webglFramebuffer[re],b,_,36064,34069+re);L(_,pe)&&F(34067),t.unbindTexture()}else if(ie){const re=b.texture;for(let q=0,xe=re.length;q<xe;q++){const ue=re[q],ve=n.get(ue);t.bindTexture(3553,ve.__webglTexture),le(3553,ue,pe),_e(k.__webglFramebuffer,b,ue,36064+q,3553),L(ue,pe)&&F(3553)}t.unbindTexture()}else{let re=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?re=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,Q.__webglTexture),le(re,_,pe),_e(k.__webglFramebuffer,b,_,36064,re),L(_,pe)&&F(re),t.unbindTexture()}b.depthBuffer&&Fe(b)}function ht(b){const _=S(b)||o,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,ee=k.length;Q<ee;Q++){const ie=k[Q];if(L(ie,_)){const pe=b.isWebGLCubeRenderTarget?34067:3553,re=n.get(ie).__webglTexture;t.bindTexture(pe,re),F(pe),t.unbindTexture()}}}function nt(b){if(o&&b.samples>0&&Ne(b)===!1){const _=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,Q=b.height;let ee=16384;const ie=[],pe=b.stencilBuffer?33306:36096,re=n.get(b),q=b.isWebGLMultipleRenderTargets===!0;if(q)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,re.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){ie.push(36064+xe),b.depthBuffer&&ie.push(pe);const ue=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ue===!1&&(b.depthBuffer&&(ee|=256),b.stencilBuffer&&(ee|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,re.__webglColorRenderbuffer[xe]),ue===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),q){const ve=n.get(_[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ve,0)}r.blitFramebuffer(0,0,k,Q,0,0,k,Q,ee,9728),m&&r.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,re.__webglColorRenderbuffer[xe]);const ue=n.get(_[xe]).__webglTexture;t.bindFramebuffer(36160,re.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,ue,0)}t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(d,b.samples)}function Ne(b){const _=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(b){const _=a.render.frame;g.get(b)!==_&&(g.set(b,_),b.update())}function St(b,_){const k=b.encoding,Q=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===1035||k!==3e3&&(k===3001?o===!1?e.has("EXT_sRGB")===!0&&Q===1023?(b.format=1035,b.minFilter=1006,b.generateMipmaps=!1):_=nr.sRGBToLinear(_):(Q!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),_}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=fe,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=tt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ne}function kh(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1035)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===1028)return 6403;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(a===3001)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===37492)return a===3001?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===37496)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===37808)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===36492)return a===3001?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===36283||s===36284||s===36285||s===36286)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(s===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===1020?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Vh extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zn extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wh={type:"move"};class Hi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),v=this._getHandJoint(l,p);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hh extends lt{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1}}class qh extends Sn{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null;const p=t.getContextAttributes();let f=null,v=null;const w=[],y=[],S=new Set,E=new Map,L=new _t;L.layers.enable(1),L.viewport=new Ze;const F=new _t;F.layers.enable(2),F.viewport=new Ze;const x=[L,F],T=new Vh;T.layers.enable(1),T.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=w[B];return $===void 0&&($=new Hi,w[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=w[B];return $===void 0&&($=new Hi,w[B]=$),$.getGripSpace()},this.getHand=function(B){let $=w[B];return $===void 0&&($=new Hi,w[B]=$),$.getHandSpace()};function W(B){const $=y.indexOf(B.inputSource);if($===-1)return;const ne=w[$];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",D);for(let B=0;B<w.length;B++){const $=y[B];$!==null&&(y[B]=null,w[B].disconnect($))}P=null,X=null,e.setRenderTarget(f),m=null,u=null,d=null,i=null,v=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",N),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),v=new tn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,ne=null,z=null;p.depth&&(z=p.stencil?35056:33190,$=p.stencil?1027:1026,ne=p.stencil?1020:1014);const le={colorFormat:32856,depthFormat:z,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(le),i.updateRenderState({layers:[u]}),v=new tn(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Hh(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const oe=e.properties.get(v);oe.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(B){for(let $=0;$<B.removed.length;$++){const ne=B.removed[$],z=y.indexOf(ne);z>=0&&(y[z]=null,w[z].disconnect(ne))}for(let $=0;$<B.added.length;$++){const ne=B.added[$];let z=y.indexOf(ne);if(z===-1){for(let oe=0;oe<w.length;oe++)if(oe>=y.length){y.push(ne),z=oe;break}else if(y[oe]===null){y[oe]=ne,z=oe;break}if(z===-1)break}const le=w[z];le&&le.connect(ne)}}const G=new C,Y=new C;function K(B,$,ne){G.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);const z=G.distanceTo(Y),le=$.projectionMatrix.elements,oe=ne.projectionMatrix.elements,ce=le[14]/(le[10]-1),he=le[14]/(le[10]+1),_e=(le[9]+1)/le[5],we=(le[9]-1)/le[5],Ce=(le[8]-1)/le[0],Fe=(oe[8]+1)/oe[0],tt=ce*Ce,yt=ce*Fe,ht=z/(-Ce+Fe),nt=ht*-Ce;$.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(nt),B.translateZ(ht),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ue=ce+ht,Ne=he+ht,Ct=tt-nt,St=yt+(z-nt),b=_e*he/Ne*Ue,_=we*he/Ne*Ue;B.projectionMatrix.makePerspective(Ct,St,b,_,Ue,Ne)}function H(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;T.near=F.near=L.near=B.near,T.far=F.far=L.far=B.far,(P!==T.near||X!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,X=T.far);const $=B.parent,ne=T.cameras;H(T,$);for(let le=0;le<ne.length;le++)H(ne[le],$);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),B.matrix.copy(T.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const z=B.children;for(let le=0,oe=z.length;le<oe;le++)z[le].updateMatrixWorld(!0);ne.length===2?K(T,L,F):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return S};let J=null;function j(B,$){if(h=$.getViewerPose(l||a),g=$,h!==null){const ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let z=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,z=!0);for(let le=0;le<ne.length;le++){const oe=ne[le];let ce=null;if(m!==null)ce=m.getViewport(oe);else{const _e=d.getViewSubImage(u,oe);ce=_e.viewport,le===0&&(e.setRenderTargetTextures(v,_e.colorTexture,u.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(v))}let he=x[le];he===void 0&&(he=new _t,he.layers.enable(le),he.viewport=new Ze,x[le]=he),he.matrix.fromArray(oe.transform.matrix),he.projectionMatrix.fromArray(oe.projectionMatrix),he.viewport.set(ce.x,ce.y,ce.width,ce.height),le===0&&T.matrix.copy(he.matrix),z===!0&&T.cameras.push(he)}}for(let ne=0;ne<w.length;ne++){const z=y[ne],le=w[ne];z!==null&&le!==void 0&&le.update(z,$,l||a)}if(J&&J(B,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ne=null;for(const z of S)$.detectedPlanes.has(z)||(ne===null&&(ne=[]),ne.push(z));if(ne!==null)for(const z of ne)S.delete(z),E.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of $.detectedPlanes)if(!S.has(z))S.add(z),E.set(z,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const le=E.get(z);z.lastChangedTime>le&&(E.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}g=null}const fe=new dr;fe.setAnimationLoop(j),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function Xh(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,cr(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,v,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const S=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*S}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,v,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===1&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Yh(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function c(w,y){const S=y.program;n.uniformBlockBinding(w,S)}function l(w,y){let S=i[w.id];S===void 0&&(g(w),S=h(w),i[w.id]=S,w.addEventListener("dispose",f));const E=y.program;n.updateUBOMapping(w,E);const L=e.render.frame;s[w.id]!==L&&(u(w),s[w.id]=L)}function h(w){const y=d();w.__bindingPointIndex=y;const S=r.createBuffer(),E=w.__size,L=w.usage;return r.bindBuffer(35345,S),r.bufferData(35345,E,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,S),S}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const y=i[w.id],S=w.uniforms,E=w.__cache;r.bindBuffer(35345,y);for(let L=0,F=S.length;L<F;L++){const x=S[L];if(m(x,L,E)===!0){const T=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let X=0;for(let W=0;W<P.length;W++){const N=P[W],D=p(N);typeof N=="number"?(x.__data[0]=N,r.bufferSubData(35345,T+X,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=N.elements[0],x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=N.elements[0],x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=N.elements[0]):(N.toArray(x.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,x.__data)}}r.bindBuffer(35345,null)}function m(w,y,S){const E=w.value;if(S[y]===void 0){if(typeof E=="number")S[y]=E;else{const L=Array.isArray(E)?E:[E],F=[];for(let x=0;x<L.length;x++)F.push(L[x].clone());S[y]=F}return!0}else if(typeof E=="number"){if(S[y]!==E)return S[y]=E,!0}else{const L=Array.isArray(S[y])?S[y]:[S[y]],F=Array.isArray(E)?E:[E];for(let x=0;x<L.length;x++){const T=L[x];if(T.equals(F[x])===!1)return T.copy(F[x]),!0}}return!1}function g(w){const y=w.uniforms;let S=0;const E=16;let L=0;for(let F=0,x=y.length;F<x;F++){const T=y[F],P={boundary:0,storage:0},X=Array.isArray(T.value)?T.value:[T.value];for(let W=0,N=X.length;W<N;W++){const D=X[W],G=p(D);P.boundary+=G.boundary,P.storage+=G.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,F>0){L=S%E;const W=E-L;L!==0&&W-P.boundary<0&&(S+=E-L,T.__offset=S)}S+=P.storage}return L=S%E,L>0&&(S+=E-L),w.__size=S,w.__cache={},this}function p(w){const y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function f(w){const y=w.target;y.removeEventListener("dispose",f);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function v(){for(const w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:c,update:l,dispose:v}}function jh(){const r=On("canvas");return r.style.display="block",r}function ts(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:jh(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const p=this;let f=!1,v=0,w=0,y=null,S=-1,E=null;const L=new Ze,F=new Ze;let x=null,T=e.width,P=e.height,X=1,W=null,N=null;const D=new Ze(0,0,T,P),G=new Ze(0,0,T,P);let Y=!1;const K=new Qi;let H=!1,J=!1,j=null;const fe=new Ie,B=new C,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?X:1}let z=t;function le(M,I){for(let U=0;U<M.length;U++){const R=M[U],V=e.getContext(R,I);if(V!==null)return V}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$i}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",de,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),z=le(I,M),z===null)throw le(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let oe,ce,he,_e,we,Ce,Fe,tt,yt,ht,nt,Ue,Ne,Ct,St,b,_,k,Q,ee,ie,pe,re,q;function xe(){oe=new rc(z),ce=new Ql(z,oe,r),oe.init(ce),pe=new kh(z,oe,ce),he=new Oh(z,oe,ce),_e=new lc,we=new Th,Ce=new Gh(z,oe,he,we,ce,pe,_e),Fe=new tc(p),tt=new sc(p),yt=new _o(z,ce),re=new Kl(z,oe,yt,ce),ht=new oc(z,yt,_e,re),nt=new dc(z,ht,yt,_e),Q=new uc(z,ce,Ce),b=new ec(we),Ue=new wh(p,Fe,tt,oe,ce,re,b),Ne=new Xh(p,we),Ct=new Ch,St=new Fh(oe,ce),k=new $l(p,Fe,tt,he,nt,h,a),_=new Uh(p,nt,ce),q=new Yh(z,_e,ce,he),ee=new Jl(z,oe,_e,ce),ie=new ac(z,oe,_e,ce),_e.programs=Ue.programs,p.capabilities=ce,p.extensions=oe,p.properties=we,p.renderLists=Ct,p.shadowMap=_,p.state=he,p.info=_e}xe();const ue=new qh(p,z);this.xr=ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(T,P,!1))},this.getSize=function(M){return M.set(T,P)},this.setSize=function(M,I,U=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,P=I,e.width=Math.floor(M*X),e.height=Math.floor(I*X),U===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(T*X,P*X).floor()},this.setDrawingBufferSize=function(M,I,U){T=M,P=I,X=U,e.width=Math.floor(M*U),e.height=Math.floor(I*U),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(D)},this.setViewport=function(M,I,U,R){M.isVector4?D.set(M.x,M.y,M.z,M.w):D.set(M,I,U,R),he.viewport(L.copy(D).multiplyScalar(X).floor())},this.getScissor=function(M){return M.copy(G)},this.setScissor=function(M,I,U,R){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,I,U,R),he.scissor(F.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){he.setScissorTest(Y=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){N=M},this.getClearColor=function(M){return M.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(M=!0,I=!0,U=!0){let R=0;M&&(R|=16384),I&&(R|=256),U&&(R|=1024),z.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",de,!1),Ct.dispose(),St.dispose(),we.dispose(),Fe.dispose(),tt.dispose(),nt.dispose(),re.dispose(),q.dispose(),Ue.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Z),ue.removeEventListener("sessionend",se),j&&(j.dispose(),j=null),ae.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=_e.autoReset,I=_.enabled,U=_.autoUpdate,R=_.needsUpdate,V=_.type;xe(),_e.autoReset=M,_.enabled=I,_.autoUpdate=U,_.needsUpdate=R,_.type=V}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const I=M.target;I.removeEventListener("dispose",De),Be(I)}function Be(M){qe(M),we.remove(M)}function qe(M){const I=we.get(M).programs;I!==void 0&&(I.forEach(function(U){Ue.releaseProgram(U)}),M.isShaderMaterial&&Ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,U,R,V,me){I===null&&(I=$);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Se=Er(M,I,U,R,V);he.setMaterial(R,Me);let Te=U.index,Re=1;R.wireframe===!0&&(Te=ht.getWireframeAttribute(U),Re=2);const Ae=U.drawRange,Le=U.attributes.position;let Ge=Ae.start*Re,ft=(Ae.start+Ae.count)*Re;me!==null&&(Ge=Math.max(Ge,me.start*Re),ft=Math.min(ft,(me.start+me.count)*Re)),Te!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,Te.count)):Le!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,Le.count));const Ft=ft-Ge;if(Ft<0||Ft===1/0)return;re.setup(V,R,Se,U,Te);let Xt,ke=ee;if(Te!==null&&(Xt=yt.get(Te),ke=ie,ke.setIndex(Xt)),V.isMesh)R.wireframe===!0?(he.setLineWidth(R.wireframeLinewidth*ne()),ke.setMode(1)):ke.setMode(4);else if(V.isLine){let Pe=R.linewidth;Pe===void 0&&(Pe=1),he.setLineWidth(Pe*ne()),V.isLineSegments?ke.setMode(1):V.isLineLoop?ke.setMode(2):ke.setMode(3)}else V.isPoints?ke.setMode(0):V.isSprite&&ke.setMode(4);if(V.isInstancedMesh)ke.renderInstances(Ge,Ft,V.count);else if(U.isInstancedBufferGeometry){const Pe=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,xi=Math.min(U.instanceCount,Pe);ke.renderInstances(Ge,Ft,xi)}else ke.render(Ge,Ft)},this.compile=function(M,I){function U(R,V,me){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=1,R.needsUpdate=!0,vt(R,V,me),R.side=0,R.needsUpdate=!0,vt(R,V,me),R.side=2):vt(R,V,me)}u=St.get(M),u.init(),g.push(u),M.traverseVisible(function(R){R.isLight&&R.layers.test(I.layers)&&(u.pushLight(R),R.castShadow&&u.pushShadow(R))}),u.setupLights(p.useLegacyLights),M.traverse(function(R){const V=R.material;if(V)if(Array.isArray(V))for(let me=0;me<V.length;me++){const Me=V[me];U(Me,M,R)}else U(V,M,R)}),g.pop(),u=null};let A=null;function O(M){A&&A(M)}function Z(){ae.stop()}function se(){ae.start()}const ae=new dr;ae.setAnimationLoop(O),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(M){A=M,ue.setAnimationLoop(M),M===null?ae.stop():ae.start()},ue.addEventListener("sessionstart",Z),ue.addEventListener("sessionend",se),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(I),I=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,I,y),u=St.get(M,g.length),u.init(),g.push(u),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(fe),J=this.localClippingEnabled,H=b.init(this.clippingPlanes,J),d=Ct.get(M,m.length),d.init(),m.push(d),ze(M,I,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(W,N),H===!0&&b.beginShadows();const U=u.state.shadowsArray;if(_.render(U,M,I),H===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(d,M),u.setupLights(p.useLegacyLights),I.isArrayCamera){const R=I.cameras;for(let V=0,me=R.length;V<me;V++){const Me=R[V];Xe(d,M,Me,Me.viewport)}}else Xe(d,M,I);y!==null&&(Ce.updateMultisampleRenderTarget(y),Ce.updateRenderTargetMipmap(y)),M.isScene===!0&&M.onAfterRender(p,M,I),re.resetDefaultState(),S=-1,E=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ze(M,I,U,R){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){R&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const Me=nt.update(M),Se=M.material;Se.visible&&d.push(M,Me,Se,U,B.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==_e.render.frame&&(M.skeleton.update(),M.skeleton.frame=_e.render.frame),!M.frustumCulled||K.intersectsObject(M))){R&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const Me=nt.update(M),Se=M.material;if(Array.isArray(Se)){const Te=Me.groups;for(let Re=0,Ae=Te.length;Re<Ae;Re++){const Le=Te[Re],Ge=Se[Le.materialIndex];Ge&&Ge.visible&&d.push(M,Me,Ge,U,B.z,Le)}}else Se.visible&&d.push(M,Me,Se,U,B.z,null)}}const me=M.children;for(let Me=0,Se=me.length;Me<Se;Me++)ze(me[Me],I,U,R)}function Xe(M,I,U,R){const V=M.opaque,me=M.transmissive,Me=M.transparent;u.setupLightsView(U),H===!0&&b.setGlobalState(p.clippingPlanes,U),me.length>0&&it(V,I,U),R&&he.viewport(L.copy(R)),V.length>0&&At(V,I,U),me.length>0&&At(me,I,U),Me.length>0&&At(Me,I,U),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function it(M,I,U){const R=ce.isWebGL2;j===null&&(j=new tn(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:R&&s===!0?4:0}));const V=p.getRenderTarget();p.setRenderTarget(j),p.clear();const me=p.toneMapping;p.toneMapping=0,At(M,I,U),p.toneMapping=me,Ce.updateMultisampleRenderTarget(j),Ce.updateRenderTargetMipmap(j),p.setRenderTarget(V)}function At(M,I,U){const R=I.isScene===!0?I.overrideMaterial:null;for(let V=0,me=M.length;V<me;V++){const Me=M[V],Se=Me.object,Te=Me.geometry,Re=R===null?Me.material:R,Ae=Me.group;Se.layers.test(U.layers)&&Oe(Se,I,U,Te,Re,Ae)}}function Oe(M,I,U,R,V,me){M.onBeforeRender(p,I,U,R,V,me),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(p,I,U,R,M,me),V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,p.renderBufferDirect(U,I,R,V,M,me),V.side=0,V.needsUpdate=!0,p.renderBufferDirect(U,I,R,V,M,me),V.side=2):p.renderBufferDirect(U,I,R,V,M,me),M.onAfterRender(p,I,U,R,V,me)}function vt(M,I,U){I.isScene!==!0&&(I=$);const R=we.get(M),V=u.state.lights,me=u.state.shadowsArray,Me=V.state.version,Se=Ue.getParameters(M,V.state,me,I,U),Te=Ue.getProgramCacheKey(Se);let Re=R.programs;R.environment=M.isMeshStandardMaterial?I.environment:null,R.fog=I.fog,R.envMap=(M.isMeshStandardMaterial?tt:Fe).get(M.envMap||R.environment),Re===void 0&&(M.addEventListener("dispose",De),Re=new Map,R.programs=Re);let Ae=Re.get(Te);if(Ae!==void 0){if(R.currentProgram===Ae&&R.lightsStateVersion===Me)return Lt(M,Se),Ae}else Se.uniforms=Ue.getUniforms(M),M.onBuild(U,Se,p),M.onBeforeCompile(Se,p),Ae=Ue.acquireProgram(Se,Te),Re.set(Te,Ae),R.uniforms=Se.uniforms;const Le=R.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=b.uniform),Lt(M,Se),R.needsLights=Ar(M),R.lightsStateVersion=Me,R.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix);const Ge=Ae.getUniforms(),ft=di.seqWithValue(Ge.seq,Le);return R.currentProgram=Ae,R.uniformsList=ft,Ae}function Lt(M,I){const U=we.get(M);U.outputEncoding=I.outputEncoding,U.instancing=I.instancing,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function Er(M,I,U,R,V){I.isScene!==!0&&(I=$),Ce.resetTextureUnits();const me=I.fog,Me=R.isMeshStandardMaterial?I.environment:null,Se=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:3e3,Te=(R.isMeshStandardMaterial?tt:Fe).get(R.envMap||Me),Re=R.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ae=!!R.normalMap&&!!U.attributes.tangent,Le=!!U.morphAttributes.position,Ge=!!U.morphAttributes.normal,ft=!!U.morphAttributes.color,Ft=R.toneMapped?p.toneMapping:0,Xt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ke=Xt!==void 0?Xt.length:0,Pe=we.get(R),xi=u.state.lights;if(H===!0&&(J===!0||M!==E)){const pt=M===E&&R.id===S;b.setState(R,M,pt)}let Ye=!1;R.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xi.state.version||Pe.outputEncoding!==Se||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Te||R.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==b.numPlanes||Pe.numIntersection!==b.numIntersection)||Pe.vertexAlphas!==Re||Pe.vertexTangents!==Ae||Pe.morphTargets!==Le||Pe.morphNormals!==Ge||Pe.morphColors!==ft||Pe.toneMapping!==Ft||ce.isWebGL2===!0&&Pe.morphTargetsCount!==ke)&&(Ye=!0):(Ye=!0,Pe.__version=R.version);let Yt=Pe.currentProgram;Ye===!0&&(Yt=vt(R,I,V));let rs=!1,Tn=!1,vi=!1;const st=Yt.getUniforms(),jt=Pe.uniforms;if(he.useProgram(Yt.program)&&(rs=!0,Tn=!0,vi=!0),R.id!==S&&(S=R.id,Tn=!0),rs||E!==M){if(st.setValue(z,"projectionMatrix",M.projectionMatrix),ce.logarithmicDepthBuffer&&st.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,Tn=!0,vi=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const pt=st.map.cameraPosition;pt!==void 0&&pt.setValue(z,B.setFromMatrixPosition(M.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&st.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||V.isSkinnedMesh)&&st.setValue(z,"viewMatrix",M.matrixWorldInverse)}if(V.isSkinnedMesh){st.setOptional(z,V,"bindMatrix"),st.setOptional(z,V,"bindMatrixInverse");const pt=V.skeleton;pt&&(ce.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),st.setValue(z,"boneTexture",pt.boneTexture,Ce),st.setValue(z,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mi=U.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0&&ce.isWebGL2===!0)&&Q.update(V,U,Yt),(Tn||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,st.setValue(z,"receiveShadow",V.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(jt.envMap.value=Te,jt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Tn&&(st.setValue(z,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&Cr(jt,vi),me&&R.fog===!0&&Ne.refreshFogUniforms(jt,me),Ne.refreshMaterialUniforms(jt,R,X,P,j),di.upload(z,Pe.uniformsList,jt,Ce)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(di.upload(z,Pe.uniformsList,jt,Ce),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&st.setValue(z,"center",V.center),st.setValue(z,"modelViewMatrix",V.modelViewMatrix),st.setValue(z,"normalMatrix",V.normalMatrix),st.setValue(z,"modelMatrix",V.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const pt=R.uniformsGroups;for(let yi=0,Lr=pt.length;yi<Lr;yi++)if(ce.isWebGL2){const os=pt[yi];q.update(os,Yt),q.bind(os,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Cr(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Ar(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(M,I,U){we.get(M.texture).__webglTexture=I,we.get(M.depthTexture).__webglTexture=U;const R=we.get(M);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=U===void 0,R.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const U=we.get(M);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,U=0){y=M,v=I,w=U;let R=!0,V=null,me=!1,Me=!1;if(M){const Te=we.get(M);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),R=!1):Te.__webglFramebuffer===void 0?Ce.setupRenderTarget(M):Te.__hasExternalTextures&&Ce.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Me=!0);const Ae=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(V=Ae[I],me=!0):ce.isWebGL2&&M.samples>0&&Ce.useMultisampledRTT(M)===!1?V=we.get(M).__webglMultisampledFramebuffer:V=Ae,L.copy(M.viewport),F.copy(M.scissor),x=M.scissorTest}else L.copy(D).multiplyScalar(X).floor(),F.copy(G).multiplyScalar(X).floor(),x=Y;if(he.bindFramebuffer(36160,V)&&ce.drawBuffers&&R&&he.drawBuffers(M,V),he.viewport(L),he.scissor(F),he.setScissorTest(x),me){const Te=we.get(M.texture);z.framebufferTexture2D(36160,36064,34069+I,Te.__webglTexture,U)}else if(Me){const Te=we.get(M.texture),Re=I||0;z.framebufferTextureLayer(36160,36064,Te.__webglTexture,U||0,Re)}S=-1},this.readRenderTargetPixels=function(M,I,U,R,V,me,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se){he.bindFramebuffer(36160,Se);try{const Te=M.texture,Re=Te.format,Ae=Te.type;if(Re!==1023&&pe.convert(Re)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===1016&&(oe.has("EXT_color_buffer_half_float")||ce.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ae!==1009&&pe.convert(Ae)!==z.getParameter(35738)&&!(Ae===1015&&(ce.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-R&&U>=0&&U<=M.height-V&&z.readPixels(I,U,R,V,pe.convert(Re),pe.convert(Ae),me)}finally{const Te=y!==null?we.get(y).__webglFramebuffer:null;he.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(M,I,U=0){const R=Math.pow(2,-U),V=Math.floor(I.image.width*R),me=Math.floor(I.image.height*R);Ce.setTexture2D(I,0),z.copyTexSubImage2D(3553,U,0,0,M.x,M.y,V,me),he.unbindTexture()},this.copyTextureToTexture=function(M,I,U,R=0){const V=I.image.width,me=I.image.height,Me=pe.convert(U.format),Se=pe.convert(U.type);Ce.setTexture2D(U,0),z.pixelStorei(37440,U.flipY),z.pixelStorei(37441,U.premultiplyAlpha),z.pixelStorei(3317,U.unpackAlignment),I.isDataTexture?z.texSubImage2D(3553,R,M.x,M.y,V,me,Me,Se,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(3553,R,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,Me,I.mipmaps[0].data):z.texSubImage2D(3553,R,M.x,M.y,Me,Se,I.image),R===0&&U.generateMipmaps&&z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(M,I,U,R,V=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Se=M.max.z-M.min.z+1,Te=pe.convert(R.format),Re=pe.convert(R.type);let Ae;if(R.isData3DTexture)Ce.setTexture3D(R,0),Ae=32879;else if(R.isDataArrayTexture)Ce.setTexture2DArray(R,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,R.flipY),z.pixelStorei(37441,R.premultiplyAlpha),z.pixelStorei(3317,R.unpackAlignment);const Le=z.getParameter(3314),Ge=z.getParameter(32878),ft=z.getParameter(3316),Ft=z.getParameter(3315),Xt=z.getParameter(32877),ke=U.isCompressedTexture?U.mipmaps[0]:U.image;z.pixelStorei(3314,ke.width),z.pixelStorei(32878,ke.height),z.pixelStorei(3316,M.min.x),z.pixelStorei(3315,M.min.y),z.pixelStorei(32877,M.min.z),U.isDataTexture||U.isData3DTexture?z.texSubImage3D(Ae,V,I.x,I.y,I.z,me,Me,Se,Te,Re,ke.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ae,V,I.x,I.y,I.z,me,Me,Se,Te,ke.data)):z.texSubImage3D(Ae,V,I.x,I.y,I.z,me,Me,Se,Te,Re,ke),z.pixelStorei(3314,Le),z.pixelStorei(32878,Ge),z.pixelStorei(3316,ft),z.pixelStorei(3315,Ft),z.pixelStorei(32877,Xt),V===0&&R.generateMipmaps&&z.generateMipmap(Ae),he.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ce.setTextureCube(M,0):M.isData3DTexture?Ce.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ce.setTexture2DArray(M,0):Ce.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){v=0,w=0,y=null,he.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(ts.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Zh extends ts{}Zh.prototype.isWebGL1Renderer=!0;class $h extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ns extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vs=new C,Ws=new C,Hs=new Ie,qi=new Ji,ci=new Wn;class xr extends $e{constructor(e=new ct,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Vs.fromBufferAttribute(t,i-1),Ws.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vs.distanceTo(Ws);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(i),ci.radius+=s,e.ray.intersectsSphere(ci)===!1)return;Hs.copy(i).invert(),qi.copy(e.ray).applyMatrix4(Hs);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,d=new C,u=new C,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let y=v,S=w-1;y<S;y+=m){const E=g.getX(y),L=g.getX(y+1);if(l.fromBufferAttribute(f,E),h.fromBufferAttribute(f,L),qi.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(u);x<e.near||x>e.far||t.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),w=Math.min(f.count,a.start+a.count);for(let y=v,S=w-1;y<S;y+=m){if(l.fromBufferAttribute(f,y),h.fromBufferAttribute(f,y+1),qi.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const qs=new C,Xs=new C;class Kh extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)qs.fromBufferAttribute(t,i),Xs.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qs.distanceTo(Xs);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class is extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ys=new Ie,Zi=new Ji,hi=new Wn,ui=new C;class vr extends $e{constructor(e=new ct,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(i),hi.radius+=s,e.ray.intersectsSphere(hi)===!1)return;Ys.copy(i).invert(),Zi.copy(e.ray).applyMatrix4(Ys);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=u,p=m;g<p;g++){const f=l.getX(g);ui.fromBufferAttribute(d,f),js(ui,f,c,i,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,p=m;g<p;g++)ui.fromBufferAttribute(d,g),js(ui,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function js(r,e,t,n,i,s,a){const o=Zi.distanceSqToPoint(r);if(o<t){const c=new C;Zi.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Gn extends ct{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],m=[];let g=0;const p=[],f=n/2;let v=0;w(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(m,2));function w(){const S=new C,E=new C;let L=0;const F=(t-e)/n;for(let x=0;x<=s;x++){const T=[],P=x/s,X=P*(t-e)+e;for(let W=0;W<=i;W++){const N=W/i,D=N*c+o,G=Math.sin(D),Y=Math.cos(D);E.x=X*G,E.y=-P*n+f,E.z=X*Y,d.push(E.x,E.y,E.z),S.set(G,F,Y).normalize(),u.push(S.x,S.y,S.z),m.push(N,1-P),T.push(g++)}p.push(T)}for(let x=0;x<i;x++)for(let T=0;T<s;T++){const P=p[T][x],X=p[T+1][x],W=p[T+1][x+1],N=p[T][x+1];h.push(P,X,N),h.push(X,W,N),L+=6}l.addGroup(v,L,0),v+=L}function y(S){const E=g,L=new be,F=new C;let x=0;const T=S===!0?e:t,P=S===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,f*P,0),u.push(0,P,0),m.push(.5,.5),g++;const X=g;for(let W=0;W<=i;W++){const D=W/i*c+o,G=Math.cos(D),Y=Math.sin(D);F.x=T*Y,F.y=f*P,F.z=T*G,d.push(F.x,F.y,F.z),u.push(0,P,0),L.x=G*.5+.5,L.y=Y*.5*P+.5,m.push(L.x,L.y),g++}for(let W=0;W<i;W++){const N=E+W,D=X+W;S===!0?h.push(D,D+1,N):h.push(D+1,D,N),x+=3}l.addGroup(v,x,S===!0?1:2),v+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _i extends Gn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ss extends ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new C,u=new C,m=[],g=[],p=[],f=[];for(let v=0;v<=n;v++){const w=[],y=v/n;let S=0;v==0&&a==0?S=.5/t:v==n&&c==Math.PI&&(S=-.5/t);for(let E=0;E<=t;E++){const L=E/t;d.x=-e*Math.cos(i+L*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(i+L*s)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(L+S,1-y),w.push(l++)}h.push(w)}for(let v=0;v<n;v++)for(let w=0;w<t;w++){const y=h[v][w+1],S=h[v][w],E=h[v+1][w],L=h[v+1][w+1];(v!==0||a>0)&&m.push(y,S,L),(v!==n-1||c<Math.PI)&&m.push(S,E,L)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kn extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Zs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Qh=new Jh;class Mr{constructor(e){this.manager=e!==void 0?e:Qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class eu extends Mr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Zs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=On("img");function c(){h(),Zs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class tu extends Mr{constructor(e){super(e)}load(e,t,n,i){const s=new lt,a=new eu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class yr extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xi=new Ie,$s=new C,Ks=new C;class nu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$s.setFromMatrixPosition(e.matrixWorld),t.position.copy($s),Ks.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ks),t.updateMatrixWorld(),Xi.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xi),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xi)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iu extends nu{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class su extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ru extends yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ou{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Js(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Js();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Js(){return(typeof performance>"u"?Date:performance).now()}class au extends Kh{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let u=0,m=0,g=-o;u<=t;u++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const p=u===s?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const h=new ct;h.setAttribute("position",new Ke(c,3)),h.setAttribute("color",new Ke(l,3));const d=new ns({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$i}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$i);class lu{constructor(){this.textureLoader=new tu,this.modelCache=new Map,this.textureCache=new Map,this.materialCache=new Map}loadTexture(e,t){if(this.textureCache.has(e)){const i=this.textureCache.get(e);return t&&t(i),i}const n=this.textureLoader.load(e,i=>{t&&t(i)});return this.textureCache.set(e,n),n}createMaterial(e){const t=JSON.stringify(e);if(this.materialCache.has(t))return this.materialCache.get(t);const n=new kn(e);return this.materialCache.set(t,n),n}createBunnyModel(){const e=new Je(new qt(1,1,1),this.createMaterial({color:3368635})),t=new Je(new _i(.2,.5,4),this.createMaterial({color:16724787}));return t.position.set(0,0,.75),t.rotation.x=-Math.PI/2,e.add(t),e}createHumanModel(){return new Je(new qt(.8,1.8,.6),this.createMaterial({color:6732595}))}}class cu{constructor(e,t){this.game=e,this.container=t,this.instructions=null,this.keys={w:!1,a:!1,s:!1,d:!1},this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isMouseDown=!1,this.prevMouseX=0,this.prevMouseY=0,this.cameraAngle=Math.PI,this.cameraAngleY=.5,this.targetCameraAngle=this.cameraAngle,this.targetCameraAngleY=this.cameraAngleY,this.orbitSpeed=.005,this.isFirstPerson=this.game&&this.game.gameMode==="first_person",console.log("InputManager created - FP mode:",this.isFirstPerson),this.setupEventListeners()}setupEventListeners(){if(!this.container){console.error("InputManager: container is null, cannot setup event listeners");return}console.log("Setting up InputManager event listeners"),this.container.addEventListener("mousedown",e=>{this.handleMouseDown(e)}),document.addEventListener("mousemove",e=>{this.handleMouseMove(e)}),document.addEventListener("mouseup",e=>{this.handleMouseUp(e)}),document.addEventListener("keydown",e=>this.handleKey(e,!0)),document.addEventListener("keyup",e=>this.handleKey(e,!1)),document.addEventListener("pointerlockchange",()=>{console.log("Pointer lock state changed:",!!document.pointerLockElement)}),document.addEventListener("pointerlockerror",()=>{console.error("Pointer lock error")}),console.log("InputManager event listeners setup complete")}handleMouseDown(e){console.log("Mouse down in InputManager"),this.isFirstPerson&&this.container&&document.pointerLockElement!==this.container&&(console.log("Requesting pointer lock for first-person mode"),this.container.requestPointerLock()),this.game.player&&this.game.player.handleMouseDown(e),this.instructions&&(this.instructions.style.display="none",this.game.player&&(console.log("Initializing player controls from mouse down"),this.game.player.onInstructionsDismissed())),this.isMouseDown=!0,this.prevMouseX=e.clientX,this.prevMouseY=e.clientY}handleMouseUp(e){console.log("Mouse up in InputManager"),this.isMouseDown=!1,this.game.player&&this.game.player.handleMouseUp(e)}handleMouseMove(e){this.game.player&&this.game.player.handleMouseMove(e,{prevMouseX:this.prevMouseX,prevMouseY:this.prevMouseY,isMouseDown:this.isMouseDown}),this.instructions&&this.instructions.style.display==="none"&&(this.prevMouseX=e.clientX,this.prevMouseY=e.clientY)}handleKey(e,t){const n=e.code;if(n==="KeyW")this.keys.w=t,this.moveForward=t;else if(n==="KeyA")this.keys.a=t,this.moveLeft=t;else if(n==="KeyS")this.keys.s=t,this.moveBackward=t;else if(n==="KeyD")this.keys.d=t,this.moveRight=t;else if(n==="KeyT"&&t){const i=this.game.switchPlayerMode();console.log("Switched to player mode:",i)}else n==="Escape"&&t&&this.showInstructions()}addInstructions(e){console.log("Adding instructions overlay");const t=document.createElement("div");t.className="instructions",t.innerHTML=`
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
        `,t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.color="white",t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.fontFamily="Arial, sans-serif",t.style.zIndex="100",t.style.cursor="pointer",t.style.textAlign="center",this.instructions=t,e.appendChild(t),t.addEventListener("click",()=>{console.log("Instructions clicked, hiding and initializing player"),this.hideInstructions(),this.game.player&&this.game.player.onInstructionsDismissed()})}showInstructions(){this.instructions&&(this.instructions.style.display="flex")}hideInstructions(){this.instructions&&(this.instructions.style.display="none",this.prevMouseX=0,this.prevMouseY=0)}getKeysState(){return{...this.keys,moveForward:this.moveForward,moveBackward:this.moveBackward,moveLeft:this.moveLeft,moveRight:this.moveRight}}getCameraOrbitState(){return{cameraAngle:this.cameraAngle,cameraAngleY:this.cameraAngleY,targetCameraAngle:this.targetCameraAngle,targetCameraAngleY:this.targetCameraAngleY}}updateCameraOrbit(e){this.cameraAngle=e.cameraAngle??this.cameraAngle,this.cameraAngleY=e.cameraAngleY??this.cameraAngleY,this.targetCameraAngle=e.targetCameraAngle??this.targetCameraAngle,this.targetCameraAngleY=e.targetCameraAngleY??this.targetCameraAngleY}}class Sr{constructor(e,t={}){this.game=e,this.scene=e.scene,this.camera=e.camera,this.model=null,this.position=new C(0,0,0),this.direction=new C(0,0,-1),this.targetDirection=new C(0,0,-1),this.physics=null,this.movement=null,this.controls=null,this.velocity=new C(0,0,0),this.isGrounded=!0,this.eyeHeight=t.eyeHeight||1.6,console.log("Player base class initialized")}init(){console.warn("Player.init() should be implemented by child classes")}update(e){const t=this.controls?this.controls.getInput():null;this.movement&&t&&this.movement.update(t,e,this),this.physics&&this.physics.apply(this,e)}handleMouseDown(e){this.controls&&this.controls.handleMouseDown(e)}handleMouseMove(e,t){if(this.controls)if(document.pointerLockElement===this.game.container){const n={movementX:e.movementX||0,movementY:e.movementY||0,isPointerLocked:!0};this.controls.handleMouseMove(e,n)}else this.controls.handleMouseMove(e,t)}onInstructionsDismissed(){if(console.log("Instructions dismissed, initializing controls"),this.controls&&typeof this.controls.init=="function")try{if(!this.game||!this.game.container){console.error("Cannot initialize controls: game.container is null or undefined");return}this.controls.init(this.game.container),console.log("Controls initialized successfully")}catch(e){console.error("Error initializing player controls:",e)}else console.warn("No controls to initialize or init method not available")}movePlayer(e){this.model&&(this.model.position.add(e),this.position.copy(this.model.position))}rotateToDirection(e,t){if(this.movement)this.movement.rotate(this,e,t);else if(this.model){const n=new sn,i=new Ie,s=e.clone().negate(),a=new C(0,1,0);i.lookAt(new C(0,0,0),s,a),n.setFromRotationMatrix(i);const o=this.movement?this.movement.rotationSpeed:5,c=Math.min(1,o*t);this.model.quaternion.slerp(n,c),this.direction.lerp(e,c).normalize()}}cleanup(){console.log("Cleaning up player"),this.controls&&typeof this.controls.cleanup=="function"&&this.controls.cleanup(),this.model&&(this.scene.remove(this.model),this.model=null)}setPhysics(e){this.physics=e}setMovement(e){this.movement=e}setControls(e){if(!e){console.warn("Attempting to set null controls component");return}this.controls=e,console.log("Controls component set");const t=["getInput","init","cleanup"];for(const n of t)typeof this.controls[n]!="function"&&console.warn(`Controls component missing required method: ${n}`)}handleMouseUp(e){}}class br{constructor(e={}){this.gravity=e.gravity||9.8,this.frictionCoefficient=e.frictionCoefficient||.1,this.airResistance=e.airResistance||.01,this.maxVelocity=e.maxVelocity||10}apply(e,t){console.warn("BasePhysics.apply() should be implemented by subclasses")}applyGravity(e,t){e.velocity&&(e.velocity.y-=this.gravity*t)}applyFriction(e,t){if(!e.velocity||!e.isGrounded)return;const n=e.velocity.clone().setY(0).normalize().multiplyScalar(-this.frictionCoefficient);e.velocity.add(n)}limitVelocity(e){e.velocity&&e.velocity.length()>this.maxVelocity&&e.velocity.normalize().multiplyScalar(this.maxVelocity)}}class hu extends br{constructor(e={}){super({gravity:7.5,frictionCoefficient:.05,airResistance:.015,maxVelocity:12,...e}),this.bounceCoefficient=e.bounceCoefficient||.3,this.floatiness=e.floatiness||.8,this.groundLevel=.5}apply(e,t){if(e.velocity||(e.velocity=new C(0,0,0),e.isGrounded=!0),e.model&&e.model.position.y<this.groundLevel&&(e.model.position.y=this.groundLevel,e.position.copy(e.model.position),e.isGrounded=!0,e.velocity.y=0),!e.isGrounded){const i=this.gravity*this.floatiness;e.velocity.y-=i*t}if(!e.isGrounded){const i=e.velocity.clone().multiplyScalar(-this.airResistance*t);e.velocity.add(i)}e.isGrounded&&(this.applyFriction(e,t),e.velocity.y=0),this.limitVelocity(e);const n=new C(0,e.velocity.y*t,0);e.movePlayer(n),e.model&&e.model.position.y<this.groundLevel?(e.model.position.y=this.groundLevel,e.position.copy(e.model.position),e.velocity.y<-1?e.velocity.y=-e.velocity.y*this.bounceCoefficient:(e.velocity.y=0,e.isGrounded=!0)):e.model&&e.model.position.y>this.groundLevel+.1&&(e.isGrounded=!1)}}class wr{constructor(e={}){this.movementSpeed=e.movementSpeed||5,this.rotationSpeed=e.rotationSpeed||5,this.jumpForce=e.jumpForce||5,this.acceleration=e.acceleration||10,this.deceleration=e.deceleration||5}update(e,t,n){console.warn("BaseMovement.update() should be implemented by subclasses")}move(e,t){e.model&&(e.model.position.add(t),e.position.copy(e.model.position))}rotate(e,t,n){if(!e.model)return;const i=new sn,s=new Ie,a=t.clone().negate(),o=new C(0,1,0);s.lookAt(new C(0,0,0),a,o),i.setFromRotationMatrix(s);const c=Math.min(1,this.rotationSpeed*n);e.model.quaternion.slerp(i,c),e.direction.lerp(t,c).normalize()}jump(e){e.isGrounded&&e.velocity&&(e.velocity.y=this.jumpForce,e.isGrounded=!1)}}class uu extends wr{constructor(e={}){super({movementSpeed:7,rotationSpeed:4,jumpForce:7,acceleration:12,deceleration:4,...e}),this.lastDirection=new C,this.moveBuffer=new C,this.sprintMultiplier=2,this.isSprinting=!1,this.hopTime=0,this.hopFrequency=3,this.hopAmplitude=.15,this.visualOffset=new C(0,0,0)}update(e,t,n){const i=e.moveDirection,s=e.actions;this.isSprinting=s.sprint||!1;const a=e.cameraOrbit.cameraAngle||0,o=new C(0,0,-1);o.applyAxisAngle(new C(0,1,0),a),o.y=0,o.normalize();const c=new C(1,0,0);c.applyAxisAngle(new C(0,1,0),a),c.y=0,c.normalize();const l=new C;let h=!1;const d=this.isSprinting?this.movementSpeed*this.sprintMultiplier:this.movementSpeed;if(i.z<0&&(l.add(o.clone().multiplyScalar(d*t)),h=!0),i.z>0&&(l.add(o.clone().multiplyScalar(-d*t)),h=!0),i.x<0&&(l.add(c.clone().multiplyScalar(-d*t)),h=!0),i.x>0&&(l.add(c.clone().multiplyScalar(d*t)),h=!0),h){const u=new C(l.x,0,l.z);if(this.moveBuffer.x=Et.lerp(this.moveBuffer.x,u.x,this.acceleration*t),this.moveBuffer.z=Et.lerp(this.moveBuffer.z,u.z,this.acceleration*t),this.isSprinting&&n.isGrounded){this.hopTime+=t*this.hopFrequency;const g=(Math.sin(this.hopTime)+1)*.5,f=g*g*(3-2*g)*this.hopAmplitude;this.visualOffset.y=Et.lerp(this.visualOffset.y,f,Math.min(1,6*t)),n.model&&(n.model.position.y=Math.max(.5,n.position.y)+this.visualOffset.y)}else this.visualOffset.y>.001?(this.visualOffset.y*=1-Math.min(1,10*t),n.model&&(n.model.position.y=Math.max(.5,n.position.y)+this.visualOffset.y)):n.model&&(n.model.position.y=Math.max(.5,n.position.y));const m=new C(this.moveBuffer.x,0,this.moveBuffer.z);this.move(n,m),this.lastDirection.copy(u).normalize(),this.lastDirection.lengthSq()>.01&&this.rotate(n,this.lastDirection,t)}else{if(this.moveBuffer.x*=1-this.deceleration*t,this.moveBuffer.z*=1-this.deceleration*t,this.moveBuffer.length()>.01){const u=new C(this.moveBuffer.x,0,this.moveBuffer.z);this.move(n,u)}this.visualOffset.y>.001?(this.visualOffset.y*=1-Math.min(1,10*t),n.model&&(n.model.position.y=Math.max(.5,n.position.y)+this.visualOffset.y)):n.model&&(n.model.position.y=Math.max(.5,n.position.y))}s.jump&&n.isGrounded&&this.jump(n)}}class Tr{constructor(e={}){this.sensitivity=e.sensitivity||.002,this.invertY=e.invertY||!1,this.lockPointer=e.lockPointer||!1,this.enableGamepad=e.enableGamepad||!0,this.keys={},this.mouseState={buttons:{},position:new be,movement:new be},this.gamepadState=null,this.cameraOrbit={cameraAngle:0,targetCameraAngle:0,cameraAngleY:0,targetCameraAngleY:0},this.onCameraZoom=null}init(e){console.warn("BaseControls.init() should be implemented by subclasses")}getInput(){return console.warn("BaseControls.getInput() should be implemented by subclasses"),{moveDirection:new C,lookDirection:new be,actions:{},cameraOrbit:{...this.cameraOrbit}}}handleKeyDown(e){this.keys[e.key.toLowerCase()]=!0}handleKeyUp(e){this.keys[e.key.toLowerCase()]=!1}handleMouseDown(e){this.mouseState.buttons[e.button]=!0}handleMouseUp(e){this.mouseState.buttons[e.button]=!1}handleMouseMove(e){this.mouseState.position.set(e.clientX,e.clientY),e.movementX!==void 0&&e.movementY!==void 0&&this.mouseState.movement.set(e.movementX,e.movementY)}updateCameraOrbit(e){Object.assign(this.cameraOrbit,e)}cleanup(){console.warn("BaseControls.cleanup() should be implemented by subclasses")}setCameraZoomCallback(e){this.onCameraZoom=e}}class du extends Tr{constructor(e={}){super({sensitivity:.0025,invertY:!1,lockPointer:!0,enableGamepad:!0,...e}),this.orbitSmoothingFactor=e.orbitSmoothingFactor||.1,this.maxVerticalAngle=e.maxVerticalAngle||Math.PI/3,this.container=null,this.isPointerLocked=!1,this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),this.boundWheel=this.handleWheel.bind(this)}init(e){if(!e){console.error("BunnyControls.init: Container is null or undefined");return}this.container=e,window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),e.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("wheel",this.boundWheel),document.addEventListener("pointerlockchange",this.boundPointerLockChange),this.lockPointer&&e.addEventListener("click",()=>{document.pointerLockElement!==e&&e.requestPointerLock()}),console.log("BunnyControls initialized with container:",e.id)}handlePointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.container,console.log("Pointer lock changed:",this.isPointerLocked)}handleWheel(e){const t=Math.sign(e.deltaY);typeof this.onCameraZoom=="function"&&this.onCameraZoom(t)}handleMouseMove(e){if(super.handleMouseMove(e),this.isPointerLocked){const t=e.movementX*this.sensitivity,n=e.movementY*this.sensitivity*(this.invertY?-1:1);this.cameraOrbit.targetCameraAngle-=t,this.cameraOrbit.targetCameraAngleY+=n,this.cameraOrbit.targetCameraAngleY=Math.max(-this.maxVerticalAngle,Math.min(this.maxVerticalAngle,this.cameraOrbit.targetCameraAngleY)),this.cameraOrbit.cameraAngle=Et.lerp(this.cameraOrbit.cameraAngle,this.cameraOrbit.targetCameraAngle,this.orbitSmoothingFactor),this.cameraOrbit.cameraAngleY=Et.lerp(this.cameraOrbit.cameraAngleY,this.cameraOrbit.targetCameraAngleY,this.orbitSmoothingFactor)}}getInput(){const e=new C(0,0,0);(this.keys.w||this.keys.arrowup)&&(e.z=-1),(this.keys.s||this.keys.arrowdown)&&(e.z=1),(this.keys.a||this.keys.arrowleft)&&(e.x=-1),(this.keys.d||this.keys.arrowright)&&(e.x=1),e.length()>1&&e.normalize();const t={jump:this.keys[" "]||!1,sprint:this.keys.shift||!1,interact:this.keys.e||this.mouseState.buttons[0]||!1};return{moveDirection:e,lookDirection:new be(this.mouseState.movement.x,this.mouseState.movement.y),actions:t,cameraOrbit:{...this.cameraOrbit}}}cleanup(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),window.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("pointerlockchange",this.boundPointerLockChange)}setCameraZoomCallback(e){this.onCameraZoom=e}}class fu extends Sr{constructor(e,t={}){super(e,{eyeHeight:.8,...t}),this.thirdPersonDistance=t.thirdPersonDistance||5,this.thirdPersonHeight=t.thirdPersonHeight||2,this.cameraTarget=new C,this.setPhysics(new hu(t.physics||{})),this.setMovement(new uu(t.movement||{})),this.setControls(new du(t.controls||{})),this.controls&&typeof this.controls.setCameraZoomCallback=="function"?this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this)):console.warn("BunnyPlayer: controls.setCameraZoomCallback is not available"),this.init()}init(){this.model=this.game.assetLoader.createBunnyModel(),this.model.position.set(0,.5,0),this.scene.add(this.model),this.position.copy(this.model.position),this.updateCameraPosition()}update(e){super.update(e),this.updateCameraPosition()}adjustCameraDistance(e){this.thirdPersonDistance+=e*.5,this.thirdPersonDistance=Math.max(2,Math.min(10,this.thirdPersonDistance))}updateCameraPosition(){if(!this.model)return;const e=this.controls?this.controls.cameraOrbit:{cameraAngle:0,cameraAngleY:0},t=new C(Math.sin(e.cameraAngle)*this.thirdPersonDistance,this.thirdPersonHeight+Math.sin(e.cameraAngleY)*this.thirdPersonDistance,Math.cos(e.cameraAngle)*this.thirdPersonDistance);this.camera.position.copy(this.model.position).add(t),this.cameraTarget.copy(this.model.position).add(new C(0,this.eyeHeight,0)),this.camera.lookAt(this.cameraTarget)}onInstructionsDismissed(){super.onInstructionsDismissed()}}class pu extends br{constructor(e={}){super({gravity:9.8,frictionCoefficient:.2,airResistance:.01,maxVelocity:8,...e}),this.groundedThreshold=e.groundedThreshold||.1,this.mass=e.mass||70,this.inertiaFactor=e.inertiaFactor||.85,this.groundLevel=1}apply(e,t){if(e.velocity||(e.velocity=new C(0,0,0),e.isGrounded=!0),!e.model)return;if(e.model.position.y<this.groundLevel&&(e.model.position.y=this.groundLevel,e.position.copy(e.model.position),e.isGrounded=!0,e.velocity.y=0),e.isGrounded||(e.velocity.y-=this.gravity*t),!e.isGrounded){const i=e.velocity.clone().multiplyScalar(-this.airResistance*t);e.velocity.add(i)}if(e.isGrounded&&(this.applyFriction(e,t),e.velocity.y=0),e.previousVelocity){const i=new be(e.velocity.x,e.velocity.z),s=new be(e.previousVelocity.x,e.previousVelocity.z);i.lerp(s,this.inertiaFactor*t),e.velocity.x=i.x,e.velocity.z=i.y}e.previousVelocity||(e.previousVelocity=new C),e.previousVelocity.copy(e.velocity),this.limitVelocity(e);const n=new C(0,e.velocity.y*t,0);e.movePlayer(n),e.model.position.y<this.groundLevel?(e.model.position.y=this.groundLevel,e.velocity.y=0,e.isGrounded=!0,e.position.copy(e.model.position)):e.model.position.y>this.groundLevel+this.groundedThreshold&&(e.isGrounded=!1)}resolveEnvironmentCollisions(e){}}class mu extends wr{constructor(e={}){super({movementSpeed:5,rotationSpeed:5.5,jumpForce:5,acceleration:8,deceleration:6,...e}),this.sprintMultiplier=e.sprintMultiplier||1.8,this.crouchMultiplier=e.crouchMultiplier||.5,this.isCrouching=!1,this.isSprinting=!1,this.headBobAmount=e.headBobAmount||.05,this.headBobSpeed=e.headBobSpeed||5,this.headBobTime=0,this.footstepDistance=0,this.footstepThreshold=e.footstepThreshold||2,this.moveBuffer=new C}update(e,t,n){const i=e.moveDirection,s=e.actions,a=e.firstPersonMode;s.crouch!==this.isCrouching&&(this.isCrouching=s.crouch),this.isSprinting=s.sprint&&!this.isCrouching&&i.z<0;let o=this.movementSpeed;this.isSprinting&&(o*=this.sprintMultiplier),this.isCrouching&&(o*=this.crouchMultiplier);const c=new C;let l=!1;if(a){if(i.z!==0||i.x!==0){l=!0;const h=new C;if(n.fpCamera){const d=new Ie;d.extractRotation(n.fpCamera.matrixWorld),h.set(0,0,-1).applyMatrix4(d),h.y=0,h.normalize();const u=new C;u.crossVectors(new C(0,1,0),h).normalize(),i.z!==0&&c.add(h.clone().multiplyScalar(-i.z*o*t)),i.x!==0&&c.add(u.clone().multiplyScalar(-i.x*o*t))}}}else if(i.z!==0||i.x!==0){l=!0;const h=e.cameraOrbit?e.cameraOrbit.cameraAngle:0,d=new C(0,0,-1);d.applyAxisAngle(new C(0,1,0),h),d.y=0,d.normalize();const u=new C(1,0,0);u.applyAxisAngle(new C(0,1,0),h),u.y=0,u.normalize(),i.z!==0&&c.add(d.clone().multiplyScalar(i.z*o*t)),i.x!==0&&c.add(u.clone().multiplyScalar(i.x*o*t))}if(l){const h=new C(c.x,0,c.z);this.moveBuffer.x=Et.lerp(this.moveBuffer.x,h.x,this.acceleration*t),this.moveBuffer.z=Et.lerp(this.moveBuffer.z,h.z,this.acceleration*t);const d=new C(this.moveBuffer.x,0,this.moveBuffer.z);if(this.move(n,d),n.isGrounded){this.headBobTime+=t*this.headBobSpeed*(this.isSprinting?1.5:1)*(this.isCrouching?.7:1);const u=Math.sin(this.headBobTime)*this.headBobAmount;a&&n.fpCamera&&n.model&&(n.fpCamera.position.y=n.eyeHeight+u),this.footstepDistance+=h.length(),this.footstepDistance>=this.footstepThreshold&&(this.playFootstepSound(n),this.footstepDistance=0)}if(!a){const u=h.clone().normalize();u.lengthSq()>.01&&this.rotate(n,u,t)}}else if(this.moveBuffer.x*=1-this.deceleration*t,this.moveBuffer.z*=1-this.deceleration*t,this.moveBuffer.length()>.01){const h=new C(this.moveBuffer.x,0,this.moveBuffer.z);this.move(n,h)}s.jump&&n.isGrounded&&this.jump(n)}playFootstepSound(e){this.isSprinting,this.isCrouching}}class gu extends Tr{constructor(e={}){super({sensitivity:.002,invertY:e.invertY||!1,lockPointer:!0,enableGamepad:!0,...e}),this.firstPersonMode=e.firstPersonMode||!1,this.canToggleView=e.canToggleView!==void 0?e.canToggleView:!0,this.mouseSmoothingFactor=e.mouseSmoothingFactor||.2,this.container=null,this.isPointerLocked=!1,this.fpLookDirection=new be(0,0),this.targetFpLookDirection=new be(0,0),this.viewToggleRequested=!1,this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),this.boundWheel=this.handleWheel.bind(this),console.log("HumanControls constructed, firstPersonMode:",this.firstPersonMode)}init(e){if(!e){console.error("HumanControls.init: Container is null or undefined");return}this.container=e,console.log("HumanControls initializing with container:",e.id),window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),e.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("wheel",this.boundWheel),document.addEventListener("pointerlockchange",this.boundPointerLockChange),this.lockPointer&&e.addEventListener("click",()=>{if(console.log("Container clicked, requesting pointer lock"),document.pointerLockElement!==e)try{e.requestPointerLock()}catch(t){console.error("Error requesting pointer lock:",t)}})}handlePointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.container,console.log("Pointer lock changed:",this.isPointerLocked,"container:",this.container?this.container.id:"null")}handleWheel(e){if(this.firstPersonMode)return;const t=Math.sign(e.deltaY);typeof this.onCameraZoom=="function"&&this.onCameraZoom(t)}handleMouseDown(e){if(super.handleMouseDown(e),this.firstPersonMode&&this.container&&document.pointerLockElement!==this.container)try{this.container.requestPointerLock()}catch(t){console.error("Error requesting pointer lock:",t)}}handleKeyDown(e){super.handleKeyDown(e),e.key.toLowerCase()==="v"&&this.canToggleView&&(this.viewToggleRequested=!0,console.log("View toggle requested via V key"))}handleMouseMove(e,t){super.handleMouseMove(e,t);let n=0,i=0;if(t&&t.isPointerLocked)n=t.movementX*this.sensitivity,i=t.movementY*this.sensitivity*(this.invertY?-1:1),this.isPointerLocked=!0;else if(this.isPointerLocked&&e.movementX!==void 0)n=e.movementX*this.sensitivity,i=e.movementY*this.sensitivity*(this.invertY?-1:1);else return!this.isPointerLocked&&t,void 0;this.firstPersonMode?(this.targetFpLookDirection.x-=n,this.targetFpLookDirection.y=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,this.targetFpLookDirection.y-i)),this.fpLookDirection.x=Et.lerp(this.fpLookDirection.x,this.targetFpLookDirection.x,this.mouseSmoothingFactor),this.fpLookDirection.y=Et.lerp(this.fpLookDirection.y,this.targetFpLookDirection.y,this.mouseSmoothingFactor)):(this.cameraOrbit.targetCameraAngle-=n,this.cameraOrbit.targetCameraAngleY-=i,this.cameraOrbit.targetCameraAngleY=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.cameraOrbit.targetCameraAngleY)),this.cameraOrbit.cameraAngle=Et.lerp(this.cameraOrbit.cameraAngle,this.cameraOrbit.targetCameraAngle,this.mouseSmoothingFactor),this.cameraOrbit.cameraAngleY=Et.lerp(this.cameraOrbit.cameraAngleY,this.cameraOrbit.targetCameraAngleY,this.mouseSmoothingFactor))}getInput(){const e=new C(0,0,0);(this.keys.w||this.keys.arrowup)&&(e.z=-1),(this.keys.s||this.keys.arrowdown)&&(e.z=1),(this.keys.a||this.keys.arrowleft)&&(e.x=-1),(this.keys.d||this.keys.arrowright)&&(e.x=1),e.length()>1&&e.normalize();const t={jump:this.keys[" "]||!1,sprint:this.keys.shift||!1,interact:this.keys.e||this.mouseState.buttons[0]||!1,crouch:this.keys.control||!1,reload:this.keys.r||!1,toggleView:this.viewToggleRequested,use:this.mouseState.buttons[2]||!1};return this.viewToggleRequested,this.viewToggleRequested&&(this.viewToggleRequested=!1,console.log("View toggle requested from controls, letting player handle it")),{moveDirection:e,lookDirection:this.firstPersonMode?this.fpLookDirection.clone():new be(this.mouseState.movement.x,this.mouseState.movement.y),actions:t,cameraOrbit:{...this.cameraOrbit},firstPersonMode:this.firstPersonMode}}cleanup(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("wheel",this.boundWheel),document.removeEventListener("pointerlockchange",this.boundPointerLockChange),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()}setCameraZoomCallback(e){this.onCameraZoom=e}updateViewMode(e){this.firstPersonMode!==e&&(console.log("Controls: updating view mode to:",e?"first-person":"third-person"),this.firstPersonMode=e)}}class _u{constructor(e,t={}){this.player=e,this.scene=e.scene,this.game=e.game,this.name=t.name||"Unknown Weapon",this.damage=t.damage||10,this.cooldown=t.cooldown||.1,this.range=t.range||20,this.lastFireTime=0,this.isFiring=!1,this.isReloading=!1,this.model=null,this.effects=[],this.init(t)}init(e){console.log(`Initializing weapon: ${this.name}`)}startFire(){this.isFiring=!0}stopFire(){this.isFiring=!1}fire(){const e=performance.now()/1e3;return e-this.lastFireTime<this.cooldown?!1:(this.lastFireTime=e,console.log(`${this.name} fired!`),!0)}update(e){this.isFiring&&this.fire(),this.updateEffects(e)}updateEffects(e){}attachToPlayer(){this.model&&this.player.model&&this.player.model.add(this.model)}detachFromPlayer(){this.model&&this.model.parent&&this.model.parent.remove(this.model)}cleanup(){this.stopFire(),this.detachFromPlayer(),this.effects.forEach(e=>{e.parent&&e.parent.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.effects=[]}}class xu extends _u{constructor(e,t={}){super(e,{name:"Flamethrower",damage:5,cooldown:.05,range:15,...t}),this.particleCount=t.particleCount||300,this.flameLength=t.flameLength||10,this.flameWidth=t.flameWidth||2,this.particleSystem=null,this.particles=[],this.particleGeometry=null,this.particleMaterial=null,this.flameColors=[new Ee(16733440),new Ee(16750848),new Ee(16711680),new Ee(16776960)],this.flameSound=null,this.particlesInitialized=!1,this.debug=!0}init(e){this.createWeaponModel(),this.createParticleSystem(),this.debug&&this.debugSphere(),console.log("Flamethrower initialized")}debugSphere(){const e=new ss(.1,16,16),t=new pi({color:16711680});this.debugEmitter=new Je(e,t),this.debugEmitter.position.copy(this.nozzleTipPosition),this.model&&this.model.add(this.debugEmitter);const n=new ct,i=new ns({color:16776960}),s=[this.nozzleTipPosition.clone(),new C(this.nozzleTipPosition.x,this.nozzleTipPosition.y,this.nozzleTipPosition.z+5)];n.setFromPoints(s),this.debugLine=new xr(n,i),this.model&&this.model.add(this.debugLine),console.log("Debug visualizers added to flamethrower")}createWeaponModel(){const e=new zn,t=new Gn(.1,.1,.4,16),n=new kn({color:4473924,metalness:.8,roughness:.2}),i=new Je(t,n);i.rotation.x=Math.PI/2,i.position.set(.3,-.15,.4),e.add(i);const s=new Gn(.03,.05,.2,8),a=new kn({color:2236962,metalness:.5,roughness:.5}),o=new Je(s,a);o.position.set(.3,-.15,.7),o.rotation.x=Math.PI/2,e.add(o),this.nozzleTipPosition=new C(.3,-.15,.8),e.position.set(.3,-.4,-.5),this.model=e,this.player.isFirstPerson&&this.player.fpCamera?this.player.fpCamera.add(this.model):this.player.model&&this.player.model.add(this.model)}createParticleSystem(){try{this.particleGeometry=new ct;const e=new Float32Array(this.particleCount*3),t=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount);this.particles=[];for(let i=0;i<this.particleCount;i++){const s={position:new C(0,0,0),velocity:new C(0,0,0),color:new Ee,size:0,life:0,maxLife:0};e[i*3]=0,e[i*3+1]=0,e[i*3+2]=0,t[i*3]=1,t[i*3+1]=.5,t[i*3+2]=0,n[i]=0,this.particles.push(s)}this.particleGeometry.setAttribute("position",new xt(e,3)),this.particleGeometry.setAttribute("particleColor",new xt(t,3)),this.particleGeometry.setAttribute("size",new xt(n,1)),this.particleMaterial=new is({size:2,sizeAttenuation:!0,map:this.createFlameTexture(),alphaTest:.1,transparent:!0,vertexColors:!0}),this.particleSystem=new vr(this.particleGeometry,this.particleMaterial),this.particleSystem.frustumCulled=!1,this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),this.particlesInitialized=!0,console.log("Particle system created successfully")):console.error("Cannot add particle system: scene is null")}catch(e){console.error("Error creating particle system:",e),this.particlesInitialized=!1}}createFlameTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.3,"rgba(255, 200, 50, 1)"),n.addColorStop(.7,"rgba(255, 50, 0, 0.8)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new lt(e);return i.needsUpdate=!0,i}fire(){return super.fire()?this.particlesInitialized?(this.emitParticles(),!0):(console.warn("Particle system not initialized, reinitializing"),this.createParticleSystem(),!0):!1}emitParticles(){if(!this.particles||!this.particleSystem||!this.particlesInitialized){console.warn("Cannot emit particles: particle system not ready");return}if(this.particles.length===0){console.warn("No particles to emit");return}const e=20,t=new C,n=new C(0,0,1);try{if(this.player.isFirstPerson&&this.player.fpCamera){this.player.fpCamera.getWorldPosition(t),this.player.fpCamera.getWorldDirection(n);const s=this.nozzleTipPosition.clone(),a=new Ie;this.player.fpCamera.updateMatrixWorld(!0),a.makeRotationFromQuaternion(this.player.fpCamera.quaternion);const o=s.clone().applyMatrix4(a);t.add(o),this.debug&&(console.log("Nozzle world position:",t.clone()),console.log("Flame direction:",n.clone()))}else if(this.player.model){if(this.model){const s=new Ie;this.model.updateMatrixWorld(!0),s.copy(this.model.matrixWorld);const a=this.nozzleTipPosition.clone().applyMatrix4(s);t.copy(a)}this.player.model.getWorldDirection(n)}else{console.warn("Cannot determine flame origin: player model or camera not ready");return}let i=0;for(let s=0;s<this.particleCount&&i<e;s++){if(s>=this.particles.length){console.warn(`Particle index out of bounds: ${s} >= ${this.particles.length}`);continue}const a=this.particles[s];if(!a){console.warn(`Particle at index ${s} is undefined`);continue}if(a.life<=0){a.position.copy(t);const o=.08,c=new C((Math.random()-.5)*o,(Math.random()-.5)*o,(Math.random()-.5)*o),l=12+Math.random()*5;a.velocity.copy(n).normalize().multiplyScalar(l),a.velocity.add(c),a.size=2+Math.random()*4,a.maxLife=1+Math.random()*.5,a.life=a.maxLife;const h=Math.floor(Math.random()*this.flameColors.length);a.color.copy(this.flameColors[h]),i++,this.debug&&i<3&&console.log(`Particle ${s} emitted at:`,a.position.clone())}}this.debug&&console.log(`Emitted ${i} particles`)}catch(i){console.error("Error emitting particles:",i)}}updateEffects(e){if(!(!this.particleSystem||!this.particles||this.particles.length===0||!this.particlesInitialized))try{const t=this.particleGeometry.attributes.position.array,n=this.particleGeometry.attributes.particleColor.array,i=this.particleGeometry.attributes.size.array;let s=0;for(let a=0;a<this.particleCount;a++){if(a>=this.particles.length)continue;const o=this.particles[a];if(!o||o.life<=0)continue;s++,o.life-=e,o.position.addScaledVector(o.velocity,e),o.velocity.y+=2*e,o.velocity.multiplyScalar(.95);const c=o.life/o.maxLife;let l;c>.8?l=1-(1-c)*5:l=c*1.25;let h;if(c>.7){const u=(c-.7)/.3;h=this.flameColors[3].clone().lerp(this.flameColors[1],1-u)}else if(c>.3){const u=(c-.3)/.4;h=this.flameColors[0].clone().lerp(this.flameColors[1],u)}else{const u=c/.3;h=this.flameColors[2].clone().lerp(this.flameColors[0],u)}const d=a*3;d+2<t.length&&d+2<n.length&&a<i.length&&(t[d]=o.position.x,t[d+1]=o.position.y,t[d+2]=o.position.z,n[d]=h.r,n[d+1]=h.g,n[d+2]=h.b,i[a]=o.size*l)}this.debug&&this.isFiring&&console.log(`Active particles: ${s}`),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.particleColor.needsUpdate=!0,this.particleGeometry.attributes.size.needsUpdate=!0}catch(t){console.error("Error updating particle effects:",t),this.particlesInitialized=!1}}attachToPlayer(){this.player.isFirstPerson&&this.player.fpCamera?(this.model&&this.model.parent&&this.model.parent.remove(this.model),this.model&&this.player.fpCamera&&this.player.fpCamera.add(this.model)):this.player.model&&(this.model&&this.model.parent&&this.model.parent.remove(this.model),this.model&&this.player.model.add(this.model))}startFire(){this.isFiring=!0,this.debug&&console.log("Started firing flamethrower")}stopFire(){this.isFiring=!1,this.debug&&console.log("Stopped firing flamethrower")}cleanup(){super.cleanup(),this.particlesInitialized=!1,this.particleGeometry&&(this.particleGeometry.dispose(),this.particleGeometry=null),this.particleMaterial&&(this.particleMaterial.map&&this.particleMaterial.map.dispose(),this.particleMaterial.dispose(),this.particleMaterial=null),this.debugEmitter&&(this.debugEmitter.parent&&this.debugEmitter.parent.remove(this.debugEmitter),this.debugEmitter.geometry.dispose(),this.debugEmitter.material.dispose(),this.debugEmitter=null),this.debugLine&&(this.debugLine.parent&&this.debugLine.parent.remove(this.debugLine),this.debugLine.geometry.dispose(),this.debugLine.material.dispose(),this.debugLine=null),this.particles=[]}}class vu extends Sr{constructor(e,t={}){super(e,{eyeHeight:1.6,...t}),this.thirdPersonDistance=t.thirdPersonDistance||5,this.thirdPersonHeight=t.thirdPersonHeight||2,this.cameraTarget=new C,this.fpCamera=null,this.isFirstPerson=t.isFirstPerson||!1,this.weapon=null,this.isFiring=!1,this.isActive=!0,console.log("HumanPlayer constructor - first person mode:",this.isFirstPerson),this.setPhysics(new pu(t.physics||{})),this.setMovement(new mu(t.movement||{})),this.setControls(new gu({firstPersonMode:this.isFirstPerson,...t.controls||{}})),this.controls&&typeof this.controls.setCameraZoomCallback=="function"?this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this)):console.warn("HumanPlayer: controls.setCameraZoomCallback is not available"),this.init(),this.isFirstPerson&&(this.setupFirstPersonCamera(),this.toggleViewMode(!0),setTimeout(()=>{this.isActive&&this.isFirstPerson&&this.fpCamera&&this.game&&(console.log("Ensuring first-person camera is active after small delay"),this.game.setActiveCamera(this.fpCamera))},100))}init(){this.model=this.game.assetLoader.createHumanModel(),this.model.position.set(0,1,0),this.scene.add(this.model),this.position.copy(this.model.position),console.log("Human model initialized at position:",this.model.position),this.updateCameraPosition(),this.initWeapon()}initWeapon(){this.isFirstPerson&&(this.weapon=new xu(this),console.log("Flamethrower weapon initialized"))}setupFirstPersonCamera(){if(console.log("Setting up first-person camera"),!this.model||!this.isActive){console.error("Cannot setup first-person camera: model not initialized or player not active");return}this.fpCamera||(this.fpCamera=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),console.log("First-person camera created")),this.fpCamera.position.set(0,this.eyeHeight,0),this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.model.add(this.fpCamera),console.log("First-person camera added to model:",this.model.uuid),this.fpCamera.rotation.set(0,0,0),this.fpCamera.updateProjectionMatrix(),this.model.traverse(e=>{e.isMesh&&e.layers.set(1)}),this.fpCamera.layers.set(0),console.log("First-person camera setup complete"),this.isFirstPerson&&this.game&&typeof this.game.setActiveCamera=="function"&&(console.log("Setting first-person camera as active after setup"),this.game.setActiveCamera(this.fpCamera),this.createFirstPersonVisuals())}handleMouseDown(e){super.handleMouseDown(e),this.isFirstPerson&&this.weapon&&e.button===0&&this.startFiring()}handleMouseUp(e){super.handleMouseUp(e),this.isFirstPerson&&this.weapon&&e.button===0&&this.stopFiring()}startFiring(){this.weapon&&(this.isFiring=!0,this.weapon.startFire(),console.log("Started firing weapon"))}stopFiring(){this.weapon&&(this.isFiring=!1,this.weapon.stopFire(),console.log("Stopped firing weapon"))}update(e){if(!this.model||!this.isActive){console.warn("HumanPlayer update: model not initialized or player not active");return}super.update(e);const t=this.controls?this.controls.getInput():null;t&&t.firstPersonMode!==this.isFirstPerson&&(console.log("View mode change detected in input, toggling view"),this.toggleViewMode(t.firstPersonMode)),this.isFirstPerson?this.fpCamera&&t&&this.updateFirstPersonCamera(t.lookDirection):this.updateCameraPosition(),this.weapon&&this.weapon.update(e)}updateFirstPersonCamera(e){if(!this.fpCamera||!this.isActive){console.warn("Cannot update first-person camera: fpCamera is null or player not active");return}if(!e){console.warn("Cannot update first-person camera: lookDirection is null");return}const t=new Hn(e.y,e.x,0,"YXZ");this.fpCamera.rotation.copy(t),this.model&&(this.model.rotation.y=e.x)}toggleViewMode(e){this.isFirstPerson===e||!this.isActive||(this.isFirstPerson=e,console.log("Toggling view mode to:",e?"first-person":"third-person"),this.controls&&typeof this.controls.updateViewMode=="function"&&this.controls.updateViewMode(this.isFirstPerson),this.isFirstPerson?this.weapon?this.weapon&&this.weapon.attachToPlayer():this.initWeapon():this.isFiring&&this.stopFiring(),this.isFirstPerson?(this.fpCamera?(this.fpCamera.parent!==this.model&&this.model&&(this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.model.add(this.fpCamera),console.log("Reattached camera to model")),this.fpCamera.position.set(0,this.eyeHeight,0),this.fpCamera.rotation.set(0,0,0),this.fpCamera.updateMatrixWorld(!0),this.fpCamera.layers.set(0),this.game&&typeof this.game.setActiveCamera=="function"&&(this.game.setActiveCamera(this.fpCamera),console.log("Switched to first-person camera"),console.log("FP Camera position:",this.fpCamera.position),console.log("FP Camera rotation:",this.fpCamera.rotation),console.log("FP Camera parent:",this.fpCamera.parent?this.fpCamera.parent.uuid:"none"))):this.setupFirstPersonCamera(),this.model&&this.model.traverse(t=>{t.isMesh&&t.layers.set(1)})):(this.game.camera&&(this.game.setActiveCamera(this.game.camera),console.log("Switched to third-person camera")),this.model&&this.model.traverse(t=>{t.isMesh&&t.layers.set(0)})))}adjustCameraDistance(e){this.isFirstPerson||!this.isActive||(this.thirdPersonDistance+=e*.5,this.thirdPersonDistance=Math.max(2,Math.min(10,this.thirdPersonDistance)))}updateCameraPosition(){if(!this.model||this.isFirstPerson||!this.isActive)return;const e=this.controls?this.controls.cameraOrbit:{cameraAngle:0,cameraAngleY:0},t=new C(Math.sin(e.cameraAngle)*this.thirdPersonDistance,this.thirdPersonHeight+Math.sin(e.cameraAngleY)*this.thirdPersonDistance,Math.cos(e.cameraAngle)*this.thirdPersonDistance);this.camera.position.copy(this.model.position).add(t),this.cameraTarget.copy(this.model.position).add(new C(0,this.eyeHeight,0)),this.camera.lookAt(this.cameraTarget)}onInstructionsDismissed(){super.onInstructionsDismissed(),this.isFirstPerson&&this.isActive&&(console.log("Reinitializing first-person camera after instructions dismissed"),this.fpCamera||this.setupFirstPersonCamera(),this.toggleViewMode(!0),setTimeout(()=>{this.isActive&&this.isFirstPerson&&this.fpCamera&&this.game&&(console.log("Ensuring first-person camera is active after delay"),this.game.setActiveCamera(this.fpCamera))},50))}cleanup(){console.log("HumanPlayer cleanup"),this.isActive=!1,this.fpCamera&&(this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.fpCamera=null),this.weapon&&(this.weapon.cleanup(),this.weapon=null),super.cleanup()}createFirstPersonVisuals(){if(!this.isFirstPerson||!this.fpCamera||this.fpVisuals)return;const e=new qt(.1,.1,.5),t=new pi({color:8947848});this.fpVisuals=new Je(e,t),this.fpVisuals.position.set(.2,-.2,-.5),this.fpCamera.add(this.fpVisuals),console.log("Added first-person visuals")}removeFirstPersonVisuals(){this.fpVisuals&&this.fpCamera&&(this.fpCamera.remove(this.fpVisuals),this.fpVisuals=null,console.log("Removed first-person visuals"))}}class Mu{constructor(e){this.scene=e,this.entities=[]}addEntity(e){this.entities.push(e),e.mesh&&this.scene.add(e.mesh)}removeEntity(e){const t=this.entities.indexOf(e);t!==-1&&(this.entities.splice(t,1),e.mesh&&this.scene.remove(e.mesh))}update(e){for(const t of this.entities)t.update&&t.update(e)}}class yu{constructor(e){this.scene=e,this.entities=new Mu(e),this.init()}init(){this.addLights(),this.createGround(),this.createHills(),this.addStars()}addLights(){const e=new ru(4210752,2);this.scene.add(e);const t=new su(16777215,2);t.position.set(1,1,1),this.scene.add(t)}createGround(){const n=new au(100,100,16777215,8947848);n.position.y=.01,this.scene.add(n);const i=new mi(100,100),s=new kn({color:8930474,roughness:.7,metalness:.3,transparent:!0,opacity:.7}),a=new Je(i,s);a.rotation.x=-Math.PI/2,a.position.y=0,this.scene.add(a)}createHills(){const e=[6728311,7846792,8965273];for(let t=0;t<12;t++){const n=(Math.random()-.5)*80,i=(Math.random()-.5)*80,s=Math.random()*10+5,a=Math.random()*4+1,o=Math.floor(Math.random()*3)+3,c=1,l=new _i(s,a,o,c,!0),h=Math.floor(Math.random()*e.length),d=new kn({color:e[h],flatShading:!0,roughness:.8,metalness:.1}),u=new Je(l,d);u.position.set(n,a/2,i),u.rotation.y=Math.random()*Math.PI,this.scene.add(u)}}addStars(){const e=new ct,t=new is({color:16777215,size:.05}),n=[];for(let s=0;s<1e3;s++){const a=(Math.random()-.5)*100,o=Math.random()*50+10,c=(Math.random()-.5)*100;n.push(a,o,c)}e.setAttribute("position",new Ke(n,3));const i=new vr(e,t);this.scene.add(i)}update(e){this.entities.update(e)}}class Su{constructor(e){this.containerId=e,this.scene=null,this.camera=null,this.renderer=null,this.clock=new ou,this.world=null,this.player=null,this.inputManager=null,this.assetLoader=null,this.container=null,this.gameMode="third_person",this._isTogglingMode=!1,this.init()}init(){const e=document.getElementById(this.containerId);if(!e){console.error(`Container with ID '${this.containerId}' not found`);return}this.container=e,e.style.backgroundColor="#050520",this.setupRenderer(e);try{this.assetLoader=new lu,this.world=new yu(this.scene),this.setupInputManager(e),window.addEventListener("resize",()=>this.handleResize()),document.addEventListener("fullscreenchange",()=>this.handleResize()),this.handleResize(),this.animate()}catch(t){console.error("Error initializing game:",t)}}setupRenderer(e){this.scene=new $h,this.scene.background=new Ee(328992),this.camera=new _t(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,5,5),this.renderer=new ts({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement)}setupInputManager(e){this.inputManager=new cu(this,e),this.inputManager.addInstructions(e),this.createNewPlayer()}createPlayer(){this.createNewPlayer()}createNewPlayer(){this.player&&this.player.cleanup();try{this.gameMode==="first_person"?(console.log("Creating first-person player"),this.player=new vu(this,{isFirstPerson:!0,physics:{gravity:9.8},movement:{movementSpeed:5},controls:{sensitivity:.002,invertY:!1,firstPersonMode:!0}}),this.player.fpCamera&&setTimeout(()=>{this.player&&this.player.isFirstPerson&&this.player.fpCamera&&(console.log("Ensuring first-person camera is active"),this.setActiveCamera(this.player.fpCamera))},50)):(console.log("Creating third-person player"),this.player=new fu(this,{physics:{gravity:7.5},movement:{movementSpeed:7},controls:{sensitivity:.0025}})),console.log("Player created:",this.gameMode),this.inputManager&&this.inputManager.instructions&&this.inputManager.instructions.style.display==="none"&&(console.log("Auto-initializing player controls"),this.player.onInstructionsDismissed())}catch(e){console.error("Error creating player:",e)}}switchPlayerMode(){const e=this.gameMode,t=this.gameMode==="first_person"?"third_person":"first_person";return this.gameMode=t,console.log(`Switching player mode from ${e} to ${this.gameMode}`),this._isTogglingMode?(console.warn("Already toggling mode, ignoring redundant request"),this.gameMode):(this._isTogglingMode=!0,this.player?(document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),setTimeout(()=>{this.player.cleanup(),this.createNewPlayer(),this.gameMode==="first_person"&&this.player&&setTimeout(()=>{this.container&&document.pointerLockElement!==this.container&&(console.log("Requesting pointer lock after switching to first-person mode"),this.container.requestPointerLock())},100),this.inputManager&&(this.inputManager.isFirstPerson=this.gameMode==="first_person"),setTimeout(()=>{this._isTogglingMode=!1},500)},50)):(this.createNewPlayer(),setTimeout(()=>{this._isTogglingMode=!1},500)),this.gameMode)}handleResize(){if(!this.container||!this.camera||!this.renderer)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.player&&this.player.fpCamera&&(this.player.fpCamera.aspect=e/t,this.player.fpCamera.updateProjectionMatrix()),console.log("Resized renderer and camera:",e,"x",t)}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();this.world&&this.world.update(e),this.player&&this.player.update(e),this.scene&&this.camera&&this.renderer&&this.renderer.render(this.scene,this.camera)}setActiveCamera(e){if(!e){console.error("setActiveCamera: camera is null or undefined");return}console.log("Setting active camera:",e.type,e.uuid),this.camera=e,this.container?(e.aspect=this.container.clientWidth/this.container.clientHeight,e.updateProjectionMatrix(),console.log("Updated camera aspect ratio:",e.aspect)):console.warn("Cannot update camera aspect ratio: container is null")}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM loaded, initializing Jackalope Planet");const r=document.querySelectorAll(".jackalope-planet-canvas-container");console.log(`Found ${r.length} jackalope-planet containers`);const e=[];r.forEach(i=>{const s=i.getAttribute("id");if(s){console.log(`Initializing game in container: ${s}`);const a=new Su(s);e.push(a);const o=document.createElement("div");o.className="first-person-cursor",o.id=`${s}-fp-cursor`,document.body.appendChild(o)}else console.error("Container without ID found, skipping")});let t=!1,n="third_person";r.forEach(i=>{const s=document.createElement("div");s.className="jackalope-controls-info",s.innerHTML="Press <strong>T</strong> to toggle first/third person view",s.style.position="absolute",s.style.bottom="10px",s.style.left="10px",s.style.color="white",s.style.backgroundColor="rgba(0,0,0,0.5)",s.style.padding="5px 10px",s.style.borderRadius="4px",s.style.fontSize="14px",s.style.zIndex="10",i.appendChild(s)}),window.addEventListener("keydown",i=>{if((i.key==="t"||i.key==="T")&&!t){const s=n==="third_person"?"first_person":"third_person";console.log(`Global T key pressed, switching player mode to ${s}`),t=!0,document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),n=s,document.querySelectorAll(".first-person-cursor").forEach(a=>{a.style.display=s==="first_person"?"block":"none"}),setTimeout(()=>{e.forEach(a=>{if(typeof a.switchPlayerMode=="function"){const o=a.gameMode;if(o!==s){const c=a.switchPlayerMode();console.log(`Game switched to ${c} mode`)}else console.log(`Game already in ${o} mode, no switch needed`)}}),setTimeout(()=>{t=!1},1e3)},100)}}),document.addEventListener("pointerlockchange",()=>{const i=!!document.pointerLockElement,s=n==="first_person";document.querySelectorAll(".first-person-cursor").forEach(a=>{a.style.display=i&&s?"block":"none"})})});

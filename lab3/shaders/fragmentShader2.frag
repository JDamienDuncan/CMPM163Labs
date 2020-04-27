uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;
varying vec3 vUv;

void main() {

  gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 100.0);
 

}
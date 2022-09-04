uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uTime;
uniform float uProgress;
uniform vec3 uMouse;

uniform sampler2D uImage;
uniform sampler2D uDisp;
uniform sampler2D uText;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {

// float r = mix(occlusion, roughness, metalness);
  // vec2 st = gl_FragCoord.xy / uResolution.xy;

  // vec3 orm = texture2D(uORMMap, vUv).rgb;

  // float occlusion = orm.r;
  // float roughness = orm.g;
  // float metalness = orm.b;

  // float r = mix(occlusion, roughness, metalness);

  vec4 displace = texture2D(uDisp, vUv.xy);
  vec2 displacedUV = vec2(vUv.x, vUv.y);
  displacedUV.y = mix(vUv.y, displace.r - 0.2, uProgress);

  // displacedUV.y = vUv.y * displace.r * uProgress;
  vec4 color = texture2D(uImage, displacedUV);
  color.r = texture2D(uImage, displacedUV + vec2(0, 10. * 0.005) * uProgress).r;
  color.g = texture2D(uImage, displacedUV + vec2(0, 10. * 0.01) * uProgress).g;
  color.b = texture2D(uImage, displacedUV + vec2(0, 10. * 0.02) * uProgress).b;

  float dist = length(vPosition - uMouse);

  // vec2 direction = normalize(vPosition.xy - uMouse.xy);
  float prox = 1. - map(dist, 0., 0.2, 0., 1.);
  prox = clamp(prox, 0., 1.);

  // vec2 zoomedUV = vUv + direction * prox * uProgress;
  vec2 zoomedUV1 = mix(vUv, uMouse.xy + vec2(0.5), prox * uProgress);
  vec4 textColor = texture2D(uText, zoomedUV1);
  // dist = step(0.3, dist);
  // gl_FragColor = vec4(vPosition, 1.0);
  gl_FragColor = textColor;
  // gl_FragColor = vec4(dist, dist, dist, 1.0);
  // gl_FragColor = vec4(prox, prox, prox, 1.0);
  // gl_FragColor = vec4(direction, 0., 1.);
  // gl_FragColor = vec4(displace.r, 0.0, 0.0, 1.0);
  // gl_FragColor = vec4(displace.b, 0.0, 0.0, 1.0);
}
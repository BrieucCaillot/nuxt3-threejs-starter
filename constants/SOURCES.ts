enum SourceType {
	texture = 'texture',
	cubeTexture = 'cubeTexture',
	gltfModel = 'gltfModel',
}

interface Source {
	name: string
	type: SourceType
	path: string | string[]
}

const sources = [
	{
		name: 'environmentMapTexture',
		type: SourceType.cubeTexture,
		path: [
			'textures/environmentMap/px.jpg',
			'textures/environmentMap/nx.jpg',
			'textures/environmentMap/py.jpg',
			'textures/environmentMap/ny.jpg',
			'textures/environmentMap/pz.jpg',
			'textures/environmentMap/nz.jpg',
		],
	},
	{
		name: 'grassColorTexture',
		type: SourceType.texture,
		path: 'textures/dirt/color.jpg',
	},
	{
		name: 'diffuseTexture',
		type: SourceType.texture,
		path: 'textures/diffuse.png',
	},
	{
		name: 'heightTexture',
		type: SourceType.texture,
		path: 'textures/height.png',
	},
	{
		name: 'noiseTexture',
		type: SourceType.texture,
		path: 'textures/noise.jpg',
	},
	{
		name: 'noise1Texture',
		type: SourceType.texture,
		path: 'textures/noise1.png',
	},
	{
		name: 'albedoTexture',
		type: SourceType.texture,
		path: 'textures/albedo.jpg',
	},
	{
		name: 'normalTexture',
		type: SourceType.texture,
		path: 'textures/normal.jpg',
	},
	{
		name: 'ormTexture',
		type: SourceType.texture,
		path: 'textures/orm.png',
	},
	{
		name: 'betvoraTexture',
		type: SourceType.texture,
		path: 'textures/betvora-3.jpg',
	},
	{
		name: 'dispTexture',
		type: SourceType.texture,
		path: 'textures/disp.png',
	},
	{
		name: 'textTexture',
		type: SourceType.texture,
		path: 'textures/text.png',
	},
	{
		name: 'grassNormalTexture',
		type: SourceType.texture,
		path: 'textures/dirt/normal.jpg',
	},
	{
		name: 'foxModel',
		type: SourceType.gltfModel,
		path: 'models/Fox/glTF/Fox.gltf',
	},
]

export { SourceType, Source, sources }

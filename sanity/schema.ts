import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import city from './schemas/city'
import pet from './schemas/pet'
import family from './schemas/family'
import hobby from './schemas/hobby'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, city, blockContent, pet, family, hobby],
}

import { z } from 'zod'

export type RenderConfig = {
  multiplier: number
  threshold: number
  spacing: number
  width: number
  circular?: boolean
  color?: string | null
  bg?: string
  radii?: number
  canvasWidth: number
  canvasHeight: number
}

export type RotationStatus = 'portrait' | 'landscape'

export interface TextContent {
  text: string
  fontFamily: string
  fontWeight: number
  fontSize: number
  y: number
  x: number | null
  locked: boolean
}

export interface Vector2d {
  x: number
  y: number
}

export interface TemplateFileWithFile {
  file: File
  image?: undefined
}

export interface TemplateFileWithImage {
  file?: undefined
  image: string
}

export type TemplateFile = TemplateFileWithFile | TemplateFileWithImage

export interface SoundBackgroundWithImage {
  content: TemplateFile
  color?: undefined
}

export interface SoundBackgroundWithColor {
  content?: undefined
  color: string
}

export type SoundBackground = SoundBackgroundWithImage | SoundBackgroundWithColor

export interface TemplateDetails {
  name: string
  description: string
  popular?: boolean | null | undefined
  colors: string[]
  tags: string[]
  thumbnail2?: string
  thumbnail?: string
  images?: string[]
  rooms?: string[]
  styles?: string[]
}

export interface Text {
  content: TextContent
  position: { x: null | number; y: number }
  locked: boolean
}

export interface Template extends TemplateDetails {
  id?: string | undefined
  slug: string
  orientation: RotationStatus
  background: {
    content: TemplateFile
    scale: number
    position: Vector2d
    locked: boolean
  }
  backgroundColor ?: string,
  sound: {
    renderConfig: Omit<RenderConfig, 'background' | 'color'>
    position: Vector2d
    background: SoundBackground
    locked: boolean
  }
  previews: {
    portrait: string | null
    landscape: string | null
  }
  width: number
  height: number
  title: Text
  subtitle: Text,
  // popular?: boolean | null | undefined
}

export interface GetAllTemplatesQuery {
  category?: string[]
}

export const roomItem = z.object({
  id: z.string(),
  name: z.string().min(1),
  name_dutch: z.string().min(1).nullable().optional(),
  image: z.string().min(1),
  description: z.string().min(1),
  description_dutch: z.string().min(1).nullable().optional(),
  slug: z.string().min(1),
})

export const styleItem = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  name_dutch: z.string().nullable().optional(),
  description: z.string(),
  description_dutch: z.string().nullable().optional(),
})

export const themeItem = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
})

export type ThemeItem = z.infer<typeof themeItem>
export type RoomItem = z.infer<typeof roomItem>
export type StyleItem = z.infer<typeof styleItem>

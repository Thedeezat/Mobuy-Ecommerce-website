import React from 'react'

import Skeleton from '@mui/material/Skeleton'

import Stack from '@mui/material/Stack'

export default function Loader() {
  return (
    <div className="flex gap-7">
      <Stack spacing={2.5} className="mt-4">
        <Skeleton
          animation="wave"
          variant="rounded"
          width={310}
          height={180}
          sx={{ background: '#D3D3D3', opacity: '0.4' }}
        />
        <Skeleton
          animation="wave"
          sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          variant="rounded"
          width={310}
          height={22}
        />
        <div className="flex justify-between w-[70%]">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={140}
            height={20}
            sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={60}
            height={20}
            sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          />
        </div>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={180}
          height={20}
          sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
        />
      </Stack>
      {/* 2 skeleton */}
      <Stack spacing={2.5} className="mt-4">
        <Skeleton
          animation="wave"
          variant="rounded"
          width={310}
          height={180}
          sx={{ background: '#D3D3D3', opacity: '0.4' }}
        />
        <Skeleton
          animation="wave"
          sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          variant="rounded"
          width={310}
          height={22}
        />
        <div className="flex justify-between w-[70%]">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={140}
            height={20}
            sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={60}
            height={20}
            sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          />
        </div>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={180}
          height={20}
          sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
        />
      </Stack>
      {/* 3 skeleton */}
      <Stack spacing={2.5} className="mt-4">
        <Skeleton
          animation="wave"
          variant="rounded"
          width={310}
          height={180}
          sx={{ background: '#D3D3D3', opacity: '0.4' }}
        />
        <Skeleton
          animation="wave"
          sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          variant="rounded"
          width={310}
          height={22}
        />
        <div className="flex justify-between w-[70%]">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={140}
            height={20}
            sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={60}
            height={20}
            sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
          />
        </div>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={180}
          height={20}
          sx={{ borderRadius: '10px', background: '#D3D3D3', opacity: '0.4' }}
        />
      </Stack>
    </div>
  )
}

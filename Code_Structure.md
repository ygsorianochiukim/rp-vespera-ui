# LSP Domain Structure Documentation

## Models → Services → Components Architecture

------------------------------------------------------------------------

# Overview

This project follows a **Domain-Based Modular Architecture** using:

-   Models
-   Services
-   Components

Structure:

    app/
     └── lsp/
         ├── lsp.tsx
         └── page.tsx

    domains/
     └── lsp/
         ├── components/
         │   └── ListEmployee.tsx
         ├── models/
         │   └── sample.model.ts
         └── services/
             └── sample.service.ts

This structure ensures: - Separation of concerns - Maintainability -
Scalability - Clean code organization

------------------------------------------------------------------------

# Models Layer

`domains/lsp/models/`

Purpose: - Define TypeScript interfaces - Define DTOs - Define entity
structures - Provide type safety

Rules: - No API calls - No React imports - No business logic - Pure
TypeScript only

Example:

``` ts
export interface Sample {
  id: number;
  name: string;
  status: 'active' | 'inactive';
}
```

Models are used by both Services and Components for typing.

------------------------------------------------------------------------

# Services Layer
`domains/lsp/services/`

Purpose: - Handle API communication - Encapsulate business logic -
Transform API responses - Return typed data

Rules: - Can import models - Must NOT import React - Must NOT contain
JSX - Keep UI logic out

Example:

``` ts
import { Sample } from '../models/sample.model';

export class SampleService {
  static async getAll(): Promise<Sample[]> {
    const response = await fetch('/api/samples');
    return await response.json();
  }
}
```

Services act as the bridge between: Frontend UI ↔ Backend API

------------------------------------------------------------------------

# Components Layer

`domains/lsp/components/`

Purpose: - Render UI - Handle user interactions - Call service methods -
Manage local state

Rules: - Must use `.tsx` - Can import services and models - Should not
directly call fetch() - Keep business logic minimal

Example:

``` tsx
'use client';

import { useEffect, useState } from 'react';
import { Sample } from '../models/sample.model';
import { SampleService } from '../services/sample.service';

export default function ListEmployee() {
  const [data, setData] = useState<Sample[]>([]);

  useEffect(() => {
    SampleService.getAll().then(setData);
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

------------------------------------------------------------------------

# App Router Layer (Next.js)

`app/lsp/`

Purpose: - Define routes - Compose domain components - Handle
layout-level logic

Example:

``` tsx
import ListEmployee from '@/domains/lsp/components/ListEmployee';

export default function Page() {
  return (
    <div>
      <h1>LSP Module</h1>
      <ListEmployee />
    </div>
  );
}
```

------------------------------------------------------------------------

# Data Flow

Component ↓ Service ↓ API ↓ Service (typed response) ↓ Component

Models are used throughout for strong typing.

------------------------------------------------------------------------

# Naming Conventions

  Type              Convention
  ----------------- -----------------------------------
  Folders           lowercase
  Components        PascalCase.tsx
  Models            kebab or dot notation `.model.ts`
  Services          `.service.ts`
  React files       `.tsx`
  Non-React files   `.ts`

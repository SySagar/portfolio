import React, { useState } from 'react'
import { Folder, File, ChevronRight, ChevronDown, Plus } from 'lucide-react'

type Item = {
  id: string
  name: string
  type: 'file' | 'folder'
  children?: Item[]
}

const FileDirectory: React.FC = () => {
  const [directory, setDirectory] = useState<Item[]>([
    {
      id: '1',
      name: 'src',
      type: 'folder',
      children: [
        { id: '2', name: 'app.tsx', type: 'file' },
        {
          id: '3',
          name: 'utils ',
          type: 'folder',
          children: [
            { id: '4', name: 'axios.ts', type: 'file' },
          ],
        },
      ],
    },
  ])

  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['1']))

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const addItem = (parentId: string, type: 'file' | 'folder') => {
    const newName = prompt(`Enter ${type} name:`)
    if (!newName) return

    const newItem: Item = {
      id: Date.now().toString(),
      name: newName,
      type,
      children: type === 'folder' ? [] : undefined,
    }

    setDirectory((prev) => {
      const addItemToChildren = (items: Item[]): Item[] => {
        return items.map((item) => {
          if (item.id === parentId) {
            return { ...item, children: [...(item.children || []), newItem] }
          }
          if (item.children) {
            return { ...item, children: addItemToChildren(item.children) }
          }
          return item
        })
      }

      return addItemToChildren(prev)
    })
  }

  const renderItem = (item: Item, depth: number = 0) => {
    const isExpanded = expandedFolders.has(item.id)

    return (
      <div key={item.id} className="select-none">
        <div
          className={`flex items-center space-x-1 py-1 px-2 hover:bg-gray-700 cursor-pointer`}
          style={{ paddingLeft: `${depth * 1.5}rem` }}
          onClick={() => item.type === 'folder' && toggleFolder(item.id)}
        >
          {item.type === 'folder' && (
            isExpanded ? <ChevronDown size={16} color='white' /> : <ChevronRight size={16} color='white' />
          )}
          {item.type === 'folder' ? <Folder size={16} className="text-yellow-500" /> : <File size={16} className="text-blue-500" />}
          <span className='text-gray-300'>{item.name}</span>
          {item.type === 'folder' && (
            <div className="ml-auto space-x-1">
              <button
                className="p-1 hover:bg-gray-200 rounded"
                onClick={(e) => {
                  e.stopPropagation()
                  addItem(item.id, 'file')
                }}
              >
                <Plus color='grey' size={14} />
                <span className="sr-only">Add File</span>
              </button>
              <button
                className="p-1 hover:bg-gray-200 rounded"
                onClick={(e) => {
                  e.stopPropagation()
                  addItem(item.id, 'folder')
                }}
              >
                <Folder size={14} color='grey' />
                <span className="sr-only">Add Folder</span>
              </button>
            </div>
          )}
        </div>
        {item.type === 'folder' && isExpanded && item.children && (
          <div>
            {item.children.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-800  h-5/6 mt-7 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">File Directory</h2>
      <div className="rounded">
        {directory.map((item) => renderItem(item))}
      </div>
    </div>
  )
}

export default FileDirectory


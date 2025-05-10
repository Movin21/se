"use client"
import { Icon, getPartnerIcon, getSocialIcon, getUIIcon, SvgIcon } from "@/utils/icons"

export default function IconsExample() {
  // Example of using the Icon component directly
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Direct Icon Usage</h2>
        <div className="flex gap-4">
          <Icon name="ChevronDown" className="h-6 w-6 text-primary" />
          <Icon name="Search" className="h-6 w-6 text-primary" />
          <Icon name="SiGoogle" className="h-6 w-6 text-primary" />
          <Icon name="BsStarFill" className="h-6 w-6 text-primary" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Partner Icons</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Icon name={getPartnerIcon("Google") || ""} className="h-6 w-6 text-primary" />
            <span>Google</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name={getPartnerIcon("Apple") || ""} className="h-6 w-6 text-primary" />
            <span>Apple</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name={getPartnerIcon("Microsoft") || ""} className="h-6 w-6 text-primary" />
            <span>Microsoft</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Social Icons</h2>
        <div className="flex gap-4">
          {Object.keys(getSocialIcon("facebook")).includes("path") ? (
            <SvgIcon paths={[getSocialIcon("facebook").path]} className="h-6 w-6 text-primary" />
          ) : (
            <Icon name="Facebook" className="h-6 w-6 text-primary" />
          )}

          {getSocialIcon("instagram").paths && (
            <SvgIcon paths={getSocialIcon("instagram").paths} className="h-6 w-6 text-primary" />
          )}

          {getSocialIcon("twitter").path && (
            <SvgIcon paths={[getSocialIcon("twitter").path]} className="h-6 w-6 text-primary" />
          )}

          {getSocialIcon("linkedin").paths && (
            <SvgIcon paths={getSocialIcon("linkedin").paths} className="h-6 w-6 text-primary" />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">UI Icons</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(getUIIcon("")).map(([name, _]) => (
            <div key={name} className="flex flex-col items-center">
              <Icon name={getUIIcon(name) || ""} className="h-6 w-6 text-primary" />
              <span className="text-xs mt-1">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

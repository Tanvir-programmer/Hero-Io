import React from "react";
import { useLoaderData } from "react-router-dom";
import Apps from "../Components/Apps";

export default function AppDetailPage() {
  const app = useLoaderData();

  if (!app) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">App not found</h2>
        <p className="mt-2">The requested app could not be located.</p>
        <a href="/apps" className="mt-4 inline-block text-blue-600">
          Back to apps
        </a>
      </div>
    );
  }

  return <Apps app={app} />;
}

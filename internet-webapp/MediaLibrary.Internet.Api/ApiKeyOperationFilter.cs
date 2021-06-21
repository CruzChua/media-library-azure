﻿using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace MediaLibrary.Internet.Api
{
    internal class ApiKeyOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            // Piggy back off of SecurityRequirementsOperationFilter from Swashbuckle.AspNetCore.Filters which has oauth2 as the default security scheme.
            var filter = new SecurityRequirementsOperationFilter(securitySchemaName: "ApiKey");
            filter.Apply(operation, context);
        }
    }
}

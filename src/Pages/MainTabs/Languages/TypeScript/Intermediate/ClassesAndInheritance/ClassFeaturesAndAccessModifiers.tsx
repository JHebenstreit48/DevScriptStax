import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FeaturesAccessModifiers = () => {
  const markdownFilePath =
    'Languages/TypeScript/Intermediate/ClassesAndInheritance/ClassFeaturesAccessModifiers';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Intermediate - Class Features & Access Modifiers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeaturesAccessModifiers;
import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
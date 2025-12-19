import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FeaturesAccessModifiers = () => {
  const markdownFilePath =
    'Languages/TypeScript/Intermediate/ClassesAndInheritance/ClassFeaturesAccessModifiers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TypeScript Intermediate - Class Features & Access Modifiers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeaturesAccessModifiers;
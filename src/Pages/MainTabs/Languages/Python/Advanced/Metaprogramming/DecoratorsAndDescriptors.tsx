import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DecoratorsAndDescriptors = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Metaprogramming/DecoratorsAndDescriptors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Decorators & Descriptors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DecoratorsAndDescriptors;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeNarrowingAndTypedDict = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Typing/TypeNarrowingAndTypedDict';

  return (
    <>
      <PageLayout>
        <PageTitle title="Type Narrowing & TypedDict" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeNarrowingAndTypedDict;
